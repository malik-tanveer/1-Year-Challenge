import React, { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    storeName: "",
    email: "",
    currency: "USD",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("✅ Settings saved successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">⚙️ Settings</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label className="block text-sm mb-1">Store Name</label>
          <input
            type="text"
            name="storeName"
            value={form.storeName}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700"
            placeholder="Enter store name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Currency</label>
          <select
            name="currency"
            value={form.currency}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700"
          >
            <option value="USD">USD</option>
            <option value="PKR">PKR</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
