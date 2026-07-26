import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/admin";

export async function login(
  email: string,
  password: string
) {
  const user = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  localStorage.setItem("pmt_admin", "true");

  return user;
}

export async function logout() {
  localStorage.removeItem("pmt_admin");

  await signOut(auth);
}