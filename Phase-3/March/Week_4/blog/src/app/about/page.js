'use client'
import ProtectedRoute from "@/components/ProtectedRoute"
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
      <div>About</div>
    </ProtectedRoute>
  )
}
export default page;