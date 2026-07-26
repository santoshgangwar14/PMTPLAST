import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase/admin";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  state: string;
  enquiryType: string;
  message: string;
}

const COLLECTION = "enquiries";

/**
 * Save Contact Enquiry
 */
export async function addEnquiry(data: ContactFormData) {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

/**
 * Get All Enquiries
 */
export async function getEnquiries() {
  const q = query(
    collection(db, COLLECTION),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<ContactFormData, never>),
  }));
}

/**
 * Delete Enquiry
 */
export async function deleteEnquiry(id: string) {
  await deleteDoc(doc(db, COLLECTION, id));
}