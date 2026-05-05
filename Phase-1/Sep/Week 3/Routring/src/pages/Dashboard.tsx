import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Users component inside Dashboard
function Users() {
  return <h2>👥 Users Page</h2>;
}

// Settings component inside Dashboard
function Settings() {
  return <h2>⚙️ Settings Page</h2>;
}

export default function Dashboard() {
  const [dashboardTitle] = useState("Welcome to Dashboard");

  return (
    <div>
      <h1>📊 {dashboardTitle}</h1>

      {/* Navigation for nested routes */}
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="users">Users</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes defined inside the component */}
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
