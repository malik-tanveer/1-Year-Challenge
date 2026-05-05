"use client";

import ProtectedRoute from "@/components/ProtectedRoute"

export default function dashboard() {
    return (
        <ProtectedRoute>
            <div className="text-center mt-20">
                <h1 className="text-4xl font-bold">
                    Welcome to Dashboard 🎉
                </h1>
            </div>
        </ProtectedRoute>
    )
}