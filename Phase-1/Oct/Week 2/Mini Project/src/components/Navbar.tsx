import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ darkMode, setDarkMode }: any) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700"
        />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
