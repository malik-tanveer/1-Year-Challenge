import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/users");
        setUsers(res.data);
      } catch (err) {
        setError("Backend not reachable");
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Users from Backend</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.map((user) => (
        <p key={user.id}>
          {user.id}. {user.name}
        </p>
      ))}
    </div>
  );
}

export default App;
