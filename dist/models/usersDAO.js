import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase-db-config.js";
export class UsersDAO {
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
    getUserByUid(uid) {
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
//# sourceMappingURL=usersDAO.js.map