import { createContext, useContext } from "react";

const UserContext = createContext<any>(null);

export const UserCard = ({ user, children }: any) => {
  return (
    <UserContext.Provider value={user}>
      <div style={{ border: "2px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
        {children}
      </div>
    </UserContext.Provider>
  );
};

export const UserCardHeader = () => {
  const user = useContext(UserContext);
  return <h2>{user.name}</h2>;
};

export const UserCardBody = () => {
  const user = useContext(UserContext);
  return <p>Email: {user.email}</p>;
};
