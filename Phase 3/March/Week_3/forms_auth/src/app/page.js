"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-100 p-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to My Next.js App
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a simple Next.js application with a clean and modern design.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Explore the features and enjoy building your projects with Next.js!
        </p>
      </div>
      <div className="mt-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          link to <button className="text-blue-500 hover:underline px-4 py-2 bg-gray-200 rounded-lg">
            <a href="/client-component" className="text-blue-500 hover:underline">Client Component Page</a>
          </button>
        </h1>
      </div>

      <div className="text-blue-500 font-bold text-3xl mt-12 text-center">
          <button className="mx-4 px-4 py-2 bg-gray-200 rounded-lg">
            <a href="/login">Login </a>
          </button>
          <button className="mx-4 px-4 py-2 bg-gray-200 rounded-lg">
            <a href="/dashboard">Dashboard</a>
          </button>
          <button className="mx-4 px-4 py-2 bg-gray-200 rounded-lg">
            <a href="/signup">Signup</a>
          </button>

      </div>
    </div>
    </ProtectedRoute>
  );
}