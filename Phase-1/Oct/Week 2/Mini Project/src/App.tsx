import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-lg">
          <h1 className="text-xl font-bold mb-8">🛍️ Ecom Admin</h1>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="hover:text-blue-500">Dashboard</Link>
            <Link to="/orders" className="hover:text-blue-500">Orders</Link>
            <Link to="/customers" className="hover:text-blue-500">Customers</Link>
            <Link to="/settings" className="hover:text-blue-500">Settings</Link>
          </nav>

         
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
