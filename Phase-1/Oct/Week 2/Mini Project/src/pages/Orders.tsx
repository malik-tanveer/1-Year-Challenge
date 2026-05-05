import React from "react";

const Orders = () => {
  const orders = [
    { id: "ORD001", customer: "Ali Khan", product: "T-Shirt", total: "$25", status: "Delivered" },
    { id: "ORD002", customer: "Sara Malik", product: "Sneakers", total: "$90", status: "Pending" },
    { id: "ORD003", customer: "Bilal Ahmed", product: "Jeans", total: "$50", status: "Shipped" },
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">📦 Orders</h2>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Product</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">{order.total}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
