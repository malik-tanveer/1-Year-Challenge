import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, AlertCircle, CheckCircle } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");
  setLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData
    );

    login(res.data.token);
    setSuccess("Login successful");

    setTimeout(() => {
      navigate("/"); 
    }, 500);

  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center max-width justify-center bg-[#020617]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#020617] border border-slate-800 shadow-2xl rounded-2xl p-6"
      >
        <h1 className="text-2xl font-bold text-center text-white">
          Full Stack Auth
        </h1>
        <p className="text-center text-slate-400 text-sm mb-5">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-10 py-2.5 rounded-lg bg-slate-900 text-white outline-none border border-slate-800 focus:border-blue-600"
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 py-2.5 rounded-lg bg-slate-900 text-white outline-none border border-slate-800 focus:border-blue-600"
              onChange={handleChange}
            />
          </div>

          {/* ERROR / SUCCESS */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle size={16} /> {error}
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm"
              >
                <CheckCircle size={16} /> {success}
              </motion.div>
            )}
          </AnimatePresence>

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg py-2.5 font-medium disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* FOOTER */}
        <p className="text-center mt-4 text-sm text-slate-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
