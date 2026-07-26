import { useEffect, useRef, useState } from "react";
import {
  Upload,
  FileText,
  Trash2,
  Download,
} from "lucide-react";

import {
  uploadFile,
  getFiles,
  deleteFile,
} from "../services/fileService";

interface FileItem {
  id: string;
  name: string;
  url: string;
  path: string;
}

interface FileManagerProps {
  folder: string;
  title: string;
  description: string;
  accept: string;
}

export default function FileManager({
  folder,
  title,
  description,
  accept,
}: FileManagerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFiles();
  }, [folder]);

  async function loadFiles() {
    try {
      const data = await getFiles(folder);

      setFiles(
        data.map((item: any) => ({
          id: item.id,
          name: item.name,
          url: item.url,
          path: item.path,
        }))
      );
    } catch (err) {
      console.error(err);
    }
  }
  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    try {
      setLoading(true);

      await uploadFile(folder, file);

      await loadFiles();

      alert("File uploaded successfully.");

      e.target.value = "";
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(file: FileItem) {
    if (!confirm("Delete this file?")) return;

    try {
      setLoading(true);

      await deleteFile(
        folder,
        file.id,
        file.path
      );

      await loadFiles();
    } catch (error) {
      console.error(error);
      alert("Delete failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
<div className="space-y-8">

  {/* Header */}
  <div>
    <h1 className="text-3xl font-bold">{title}</h1>

    <p className="mt-2 text-gray-500">
      {description}
    </p>
  </div>

  {/* Upload Card */}
  <div
    onClick={() =>
      !loading && inputRef.current?.click()
    }
    className="cursor-pointer rounded-2xl border-2 border-dashed border-blue-300 bg-white p-12 text-center transition hover:border-blue-600 hover:bg-blue-50"
  >
    <Upload
      className="mx-auto text-blue-600"
      size={48}
    />

    <h2 className="mt-5 text-xl font-semibold">
      {loading ? "Uploading..." : "Upload File"}
    </h2>

    <p className="mt-2 text-gray-500">
      Click here to browse files
    </p>

    <input
      ref={inputRef}
      hidden
      type="file"
      accept={accept}
      onChange={handleUpload}
    />
  </div>

  {/* Uploaded Files */}
  <div className="overflow-hidden rounded-2xl bg-white shadow">

    <div className="border-b p-5">
      <h2 className="font-semibold">
        Uploaded Files
      </h2>
    </div>

    {files.length === 0 ? (

      <div className="p-10 text-center text-gray-500">
        No files uploaded yet.
      </div>

       ) : (

      <div className="divide-y">

        {files.map((file) => (

          <div
            key={file.id}
            className="flex items-center justify-between p-5"
          >

            <div className="flex items-center gap-4">

              <FileText
                size={28}
                className="text-blue-600"
              />

              <div>
                <h3 className="font-medium">
                  {file.name}
                </h3>
              </div>

            </div>

            <div className="flex gap-2">

              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-600 p-2 text-white hover:bg-green-700"
                title="Download"
              >
                <Download size={18} />
              </a>

              <button
                onClick={() => handleDelete(file)}
                className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>

            </div>

          </div>

        ))}

      </div>

    )}

  </div>

</div>

  );
}