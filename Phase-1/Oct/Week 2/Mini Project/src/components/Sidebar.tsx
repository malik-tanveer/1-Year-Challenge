import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:flex flex-col">
      <div className="p-6 text-xl font-bold border-b dark:border-gray-700">
        ShopEase Admin
      </div>
      <ul className="flex-1 p-4 space-y-4">
        <li className="hover:text-blue-500 cursor-pointer">🏠 Dashboard</li>
        <li className="hover:text-blue-500 cursor-pointer">📦 Orders</li>
        <li className="hover:text-blue-500 cursor-pointer">👥 Customers</li>
        <li className="hover:text-blue-500 cursor-pointer">⚙️ Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
