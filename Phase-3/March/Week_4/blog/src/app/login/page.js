'use client';

import { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from "lucide-react";


const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

    async function handleSubmit(e) {

    e.preventDefault();
    setError("");

    try {

      const res = await fetch("/api/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login Failed");
      }
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");

    } catch (err) {

      setError(err.message);

    }
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-8">

          <h1 className="text-2xl font-bold text-center text-gray-900">
            Blog
          </h1>

          <p className="text-center text-gray-500 text-sm mt-1 mb-6">
            Login to your account
          </p>

          {error && (
            <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 border rounded-lg"
                  required
                />

                {showPassword ? (
                  <EyeOff
                    className="absolute right-3 top-3 w-4 h-4 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <Eye
                    className="absolute right-3 top-3 w-4 h-4 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 rounded-lg transition"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link href="/register" className="text-gray-900 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;