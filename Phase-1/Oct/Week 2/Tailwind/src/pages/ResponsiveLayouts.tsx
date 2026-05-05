import React from "react";

const ResponsiveLayouts = () => {
  const navbarCode = `
<nav className="bg-blue-600 text-white flex justify-between items-center p-4">
  <h1 className="text-xl font-bold">MyWebsite</h1>
  <ul className="hidden md:flex space-x-6">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</nav>
`;

  const heroCode = `
<section className="text-center py-16 bg-blue-100">
  <h2 className="text-3xl md:text-5xl font-bold mb-4">Build Responsive Layouts Easily</h2>
  <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-base">
    Tailwind CSS makes it simple to create flexible, mobile-first layouts with responsive utilities.
  </p>
</section>
`;

  const cardsCode = `
<section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div className="bg-white shadow-md rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
    <p>Get started quickly with Tailwind utility classes.</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
    <p>Layouts automatically adjust for different screen sizes.</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-2">Customizable</h3>
    <p>Modify themes, colors, and spacing in your config file.</p>
  </div>
</section>
`;

  const imageCode = `
<section className="p-6">
  <img
    src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
    alt="Responsive Design"
    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
  />
</section>
`;

  const footerCode = `
<footer className="bg-gray-900 text-gray-300 text-center p-4 mt-10">
  <p className="text-sm md:text-base">© 2025 MyWebsite. All rights reserved.</p>
</footer>
`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center py-8">
        🌐 Responsive Layouts in Tailwind CSS
      </h1>

      {/* 🌍 Navbar */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">Navbar</h2>
        <nav className="bg-blue-600 text-white flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">MyWebsite</h1>
          <ul className="hidden md:flex space-x-6">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{navbarCode}</code>
        </pre>
      </section>

      {/* 🧱 Hero Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">Hero Section</h2>
        <section className="text-center py-16 bg-blue-100">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Build Responsive Layouts Easily
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            Tailwind CSS makes it simple to create flexible, mobile-first layouts with responsive utilities.
          </p>
        </section>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{heroCode}</code>
        </pre>
      </section>

      {/* 🧩 Cards Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">Responsive Grid Cards</h2>
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
            <p>Get started quickly with Tailwind utility classes.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Layouts automatically adjust for different screen sizes.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p>Modify themes, colors, and spacing in your config file.</p>
          </div>
        </section>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{cardsCode}</code>
        </pre>
      </section>

      {/* 🖼️ Image Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">Responsive Image</h2>
        <section className="p-6">
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
            alt="Responsive Design"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </section>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{imageCode}</code>
        </pre>
      </section>

      {/* ⚙️ Footer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">Footer</h2>
        <footer className="bg-gray-900 text-gray-300 text-center p-4 mt-10">
          <p className="text-sm md:text-base">
            © 2025 MyWebsite. All rights reserved.
          </p>
        </footer>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{footerCode}</code>
        </pre>
      </section>
    </div>
  );
};

export default ResponsiveLayouts;
