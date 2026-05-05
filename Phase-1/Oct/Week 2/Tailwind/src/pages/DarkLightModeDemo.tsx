import React, { useState, useEffect } from "react";

const DarkLightModeDemo = () => {
  // 🌙 Step 1: Dark mode toggle state
  const [darkMode, setDarkMode] = useState(false);

  // 🌍 Step 2: Apply/remove dark class on root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
      {/* 🧭 Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">ShopEase</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* 🖼️ Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-200 to-blue-400 dark:from-gray-800 dark:to-gray-700">
        <h2 className="text-4xl font-bold mb-4">Discover Your Style</h2>
        <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          Explore our exclusive collection of modern fashion and accessories.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Shop Now
        </button>
      </section>

      {/* 🧱 Products Section */}
      <section className="p-10 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition-all"
          >
            <img
              src={`https://via.placeholder.com/300x200?text=Product+${item}`}
              alt={`Product ${item}`}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stylish and comfortable. Perfect for everyday wear.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </section>

      {/* ⚙️ Footer */}
      <footer className="text-center py-6 bg-gray-200 dark:bg-gray-800">
        <p>© 2025 ShopEase. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DarkLightModeDemo;
