import { getDocs, collection, doc } from "firebase/firestore";
import { usersListType, usersDAOInterface } from "../types/usersTypes.js";
import { db, users } from "./firebase-db-config.js";

export class UsersDAO implements usersDAOInterface {
  usersList: usersListType;

  constructor() {
    this.usersList = [];
  }

  async getAllUsers() {
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      return this.usersList.push({
        uid: doc.id,
        name: doc.data().name,
        email: doc.data().email,
      });
    });

    return this.usersList;
  }

  getUserByUid(uid: string) {
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].uid === uid) {
        return this.usersList[i];
      }
    }

    return false;
  }

  getUsers() {
    return this.usersList;
  }
}
