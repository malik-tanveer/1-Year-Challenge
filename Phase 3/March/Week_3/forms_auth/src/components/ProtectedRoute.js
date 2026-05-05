"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const [isauth, setIsauth] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            router.push("/login");
        } else {
            setIsauth(true);
        }

    }, []);

    if (!isauth) return <p className="text-center mt-10">Checking auth...</p>;

    return children;
}
