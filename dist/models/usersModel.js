import { db } from "./firebase-db-config.js";
import { setDoc, doc } from "firebase/firestore";
export class User {
    constructor(uid, name, email) {
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
//# sourceMappingURL=usersModel.js.map