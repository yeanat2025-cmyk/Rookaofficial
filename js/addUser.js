// addUser.js
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js"; // firebase.js থেকে Firestore instance

async function addUser(rookaId, name, email, password){
  await setDoc(doc(collection(db, "users"), rookaId), {
    name: name,
    email: email,
    password: password,
    status: "active",
    deviceStatus: "enabled",
    timestamp: new Date()
  });
}

// উদাহরণ call
addUser("R123", "John Doe", "R123@rooka.com", "123456");
