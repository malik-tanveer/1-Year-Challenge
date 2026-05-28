"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({
  children,
}) => {

  const router = useRouter();

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

  }, []);

  return children;
};

export default ProtectedRoute;