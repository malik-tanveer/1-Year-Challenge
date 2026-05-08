"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }

  }, [router]);

  if (loading) {

    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-sm">
          Checking auth...
        </p>
      </div>
    );
  }

  return children;
}