import { useState } from "react";
import { UserContext } from "../context/UserContext";
import Profile from "../State/Profile";

const Context_1 = () => {
  const [user, setUser] = useState({ name: "Ali", email: "ali@gmail.com" });

  return (
    <UserContext.Provider value={user}>
      <div style={{ padding: "20px" }}>
        <h1>Welcome, {user.name}</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
};

export default Context_1;
