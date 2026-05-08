'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const Register = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Register Failed");
      }
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");

    } catch (err) {
      setError(err.message);
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-8">

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">
          Blog App
        </h1>

        <p className="text-center text-gray-500 text-sm mb-6">
          Create your account to continue
        </p>
        {error && (
          <p className="text-red-500 text-center mb-4 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>

            <label className="text-sm text-gray-700 font-medium mb-2 block">
              Full Name
            </label>

            <div className="relative">

              <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />

            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium mb-2 block">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium mb-2 block">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />

              {showPassword ? (
                <EyeOff
                  className="absolute right-3 top-3 w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className="absolute right-3 top-3 w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}

            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 rounded-lg transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gray-900 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;