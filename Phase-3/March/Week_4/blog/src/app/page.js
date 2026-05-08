'use client'
import ProtectedRoute from "@/components/ProtectedRoute"


export default function Home() {
  return (
    <>
      <ProtectedRoute>
        <h1 className="font-bold text4xl">

          Blog Home page

        </h1>
      </ProtectedRoute>
    </>

  );
}
