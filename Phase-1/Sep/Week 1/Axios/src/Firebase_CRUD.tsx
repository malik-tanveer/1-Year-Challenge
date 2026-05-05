// import { useEffect, useState } from "react";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { db } from "../firebase";

// type User = {
//   id?: string;
//   name: string;
//   email: string;
// };

// export default function Firebase_CRUD() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const usersCollection = collection(db, "users");

//   // READ
//   const getUsers = async () => {
//     const snapshot = await getDocs(usersCollection);
//     setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as User)));
//   };

//   // CREATE
//   const addUser = async () => {
//     if (!name || !email) return;
//     await addDoc(usersCollection, { name, email });
//     setName("");
//     setEmail("");
//     getUsers();
//   };

//   // UPDATE
//   const updateUser = async (id: string) => {
//     const userDoc = doc(db, "users", id);
//     await updateDoc(userDoc, { name: name || "Updated User" });
//     getUsers();
//   };

//   // DELETE
//   const deleteUser = async (id: string) => {
//     const userDoc = doc(db, "users", id);
//     await deleteDoc(userDoc);
//     getUsers();
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Firebase Firestore CRUD</h2>

//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name"
//       />
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter email"
//       />
//       <button onClick={addUser}>Add User</button>

//       <ul>
//         {users.map((u) => (
//           <li key={u.id}>
//             {u.name} ({u.email})
//             <button onClick={() => updateUser(u.id!)}>Update</button>
//             <button onClick={() => deleteUser(u.id!)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
