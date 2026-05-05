"use client";

import ProtectedRoute from "@/components/ProtectedRoute"
import DrawerDemo from "@/components/MyDrawer";

export default function dashboard() {
    return (
        <>
        <ProtectedRoute>
            <div className="text-center mt-20">
                <h1 className="text-4xl font-bold">
                    Welcome to Dashboard 🎉
                </h1>
            </div>

            <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-5">
        Drawer Demo
      </h1>

      <DrawerDemo />
    </div>
        </ProtectedRoute>
        </>
    )
}