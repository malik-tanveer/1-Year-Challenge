import React from "react";

const Table = () => {
  const data = [
    { id: 1, product: "T-Shirt", price: "$25", status: "Delivered" },
    { id: 2, product: "Jeans", price: "$50", status: "Pending" },
    { id: 3, product: "Sneakers", price: "$90", status: "Shipped" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="p-2">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b dark:border-gray-700">
              <td className="p-2">{item.product}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
