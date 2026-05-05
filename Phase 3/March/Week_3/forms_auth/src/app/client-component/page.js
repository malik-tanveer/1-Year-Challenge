"use client";

import ProtectedRoute from "@/components/ProtectedRoute"
import Hero from "@/components/Hero"
import Toggle from "@/components/Toggle"
import Count from "@/components/Count"

export default function ClientComponentPage() {
  return (
<ProtectedRoute>
<div className="min-h-screen bg-gray-100 p-12">

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Hero Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Live Input
          </h2>
          <Hero />
        </div>

        {/* Counter Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Counter
          </h2>
          <Count />
        </div>

        {/* Toggle Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Toggle Section
          </h2>
          <Toggle />
        </div>

      </div>
    </div>
    </ProtectedRoute>
  );
}