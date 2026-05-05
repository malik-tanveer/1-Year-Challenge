import React from "react";

const Customers = () => {
  const customers = [
    { id: 1, name: "Ali Khan", email: "ali@gmail.com", totalOrders: 8, status: "Active" },
    { id: 2, name: "Sara Malik", email: "sara@gmail.com", totalOrders: 5, status: "Inactive" },
    { id: 3, name: "Bilal Ahmed", email: "bilal@gmail.com", totalOrders: 12, status: "Active" },
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">👥 Customers</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-all"
          >
            <h3 className="text-lg font-semibold mb-1">{user.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {user.email}
            </p>
            <p className="text-sm mb-2">Orders: {user.totalOrders}</p>
            <span
              className={`text-sm font-medium ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
