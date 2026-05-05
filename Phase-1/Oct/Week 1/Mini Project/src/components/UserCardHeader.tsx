import { useContext } from "react";

export const UserCardHeader = () => {
  const user = useContext(UserContext);
  return <h2>{user.name}</h2>;
};