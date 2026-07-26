import { db, storage } from "../firebase/admin";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export interface StorageFile {
  id: string;
  name: string;
  url: string;
  path: string;
  createdAt?: any;
}

/**
 * Upload File
 */
export async function uploadFile(
  folder: string,
  file: File
): Promise<StorageFile> {
  const storageRef = ref(
    storage,
    `${folder}/${Date.now()}-${file.name}`
  );

  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  const document = await addDoc(
    collection(db, folder),
    {
      name: file.name,
      url,
      path: storageRef.fullPath,
      createdAt: serverTimestamp(),
    }
  );

  return {
    id: document.id,
    name: file.name,
    url,
    path: storageRef.fullPath,
  };
}

/**
 * Get Files (Latest First)
 */
export async function getFiles(
  folder: string
): Promise<StorageFile[]> {
  const q = query(
    collection(db, folder),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<StorageFile, "id">),
  }));
}

/**
 * Get Latest File
 */
export async function getLatestFile(
  folder: string
): Promise<StorageFile | null> {
  const files = await getFiles(folder);

  return files.length ? files[0] : null;
}

/**
 * Delete File
 */
export async function deleteFile(
  folder: string,
  id: string,
  path: string
) {
  await deleteDoc(doc(db, folder, id));

  await deleteObject(ref(storage, path));
}