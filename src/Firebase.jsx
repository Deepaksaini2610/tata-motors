// npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore database
import { getStorage } from "firebase/storage"; // For storage

// Your Firebase configuration from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCHwvn5zjtgPXZf_ir8RQVbJKSxog5tGQw",

  authDomain: "autherization-92038.firebaseapp.com",

  projectId: "autherization-92038",

  storageBucket: "autherization-92038.firebasestorage.app",

  messagingSenderId: "1032917264660",

  appId: "1:1032917264660:web:f1a47e8fdc0d0ad89f3a01",
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };




























import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddUser = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name,
        age,
      });
      alert("User Added");
    } catch (error) {
      console.error(error.message);
      alert("Error adding user");
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
