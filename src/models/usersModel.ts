import { db, users } from "./firebase-db-config.js";
import { userInterface } from "../types/usersTypes.js";
import { setDoc, doc, query, where, onSnapshot } from "firebase/firestore";

export class User implements userInterface {
  uid: string;
  name: string;
  email: string;

  constructor(uid: string, name: string, email: string) {
    this.uid = uid;
    this.name = name;
    this.email = email;
  }

  register() {
    return setDoc(doc(db, "Users", this.uid), {
      name: this.name,
      email: this.email,
    }).then((log) => log);
  }
}
