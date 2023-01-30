import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  where,
  query,
  addDoc,
  deleteDoc,
  doc,
  orderBy,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const User = collection(db, "Users");

//query

const q = query(User, where("name", "==", "John Glenn"), orderBy("age", "asc"));

onSnapshot(q, (snapshot: any) => {
  let users: any[] = [];
  snapshot.docs.forEach((doc: any) => {
    return users.push({ id: doc.id, ...doc.data() });
  });

  console.log(users);
});

function add(dataObj: any) {
  return addDoc(User, dataObj);
}

function del(id: any) {
  const ref = doc(db, "Users", id);
  return deleteDoc(ref);
}

export { add, del };
