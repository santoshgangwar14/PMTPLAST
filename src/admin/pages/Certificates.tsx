import FileManager from "../components/FileManager";

export default function Certificates() {
  return (
    <FileManager
      folder="certificates"
      title="Certificates"
      description="Upload and manage company certificates."
      accept=".pdf,.jpg,.jpeg,.png"
    />
  );
}