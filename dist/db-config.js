import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, where, query, addDoc, deleteDoc, doc, orderBy, } from "firebase/firestore";
import dotenv from "dotenv";
dotenv.config();
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "spiderwebb-jga.firebaseapp.com",
    projectId: "spiderwebb-jga",
    storageBucket: "spiderwebb-jga.appspot.com",
    messagingSenderId: "684443550366",
    appId: "1:684443550366:web:26ac04feca9e76ebc5f18f",
    measurementId: "G-Q368D7S7CV",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const User = collection(db, "Users");
//query
const q = query(User, where("name", "==", "John Glenn"), orderBy("age", "asc"));
onSnapshot(q, (snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
        return users.push({ id: doc.id, ...doc.data() });
    });
    console.log(users);
});
function add(dataObj) {
    return addDoc(User, dataObj);
}
function del(id) {
    const ref = doc(db, "Users", id);
    return deleteDoc(ref);
}
export { add, del };
//# sourceMappingURL=db-config.js.map