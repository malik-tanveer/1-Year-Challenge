import React from "react";

const Utils = () => {
  const example1 = `
<div className="bg-blue-500 text-white p-4 m-2 rounded-lg">
  This box uses Tailwind color & spacing utilities.
</div>
`;

  const example2 = `
<div className="flex justify-center items-center bg-green-400 h-40 rounded-md">
  <p className="text-lg font-semibold">
    Flex utilities make centering super easy!
  </p>
</div>
`;

  const example3 = `
<div className="mt-6 sm:bg-red-300 md:bg-yellow-300 lg:bg-purple-400 p-6 rounded-md">
  Resize the screen to see responsive color change!
</div>
`;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        ⚙️ Tailwind Utility Classes Demo
      </h1>

      {/* 🎨 Example 1: Colors & Spacing */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🎨 Colors & Spacing</h2>
        <div className="bg-blue-500 text-white p-4 m-2 rounded-lg">
          This box uses Tailwind color & spacing utilities.
        </div>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{example1}</code>
        </pre>
      </section>

      {/* 📏 Example 2: Flexbox Centering */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📏 Flexbox Centering</h2>
        <div className="flex justify-center items-center bg-green-400 h-40 rounded-md">
          <p className="text-lg font-semibold">
            Flex utilities make centering super easy!
          </p>
        </div>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{example2}</code>
        </pre>
      </section>

      {/* 🔁 Example 3: Responsive Design */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🔁 Responsive Design</h2>
        <div className="mt-6 sm:bg-red-300 md:bg-yellow-300 lg:bg-purple-400 p-6 rounded-md">
          Resize the screen to see responsive color change!
        </div>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-3">
          <code>{example3}</code>
        </pre>
      </section>
    </div>
  );
};

export default Utils;
