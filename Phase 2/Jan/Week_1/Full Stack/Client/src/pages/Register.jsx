import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, AlertCircle, CheckCircle } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      await axios.post("http://localhost:5000/api/auth/register", formData);
      setSuccess("Account created successfully");

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xs bg-[#020617] border border-slate-800 rounded-2xl shadow-xl p-5"
      >
        <h1 className="text-xl font-semibold text-center text-white">
          Register
        </h1>
        <p className="text-slate-400 text-xs text-center mb-5">
          Create your account
        </p>

        {/* ALERTS */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 mb-3 text-red-400 text-xs"
            >
              <AlertCircle size={14} /> {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 mb-3 text-green-400 text-xs"
            >
              <CheckCircle size={14} /> {success}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* NAME */}
          <div className="relative">
            <User size={14} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              required
              type="text"
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              className="
                w-full 
                h-9 
                pl-8 
                pr-2 
                text-sm 
                rounded-md 
                bg-slate-900 
                text-white 
                border border-slate-800 
                focus:border-indigo-500 
                outline-none
              "
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail size={14} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="
                w-full 
                h-9 
                pl-8 
                pr-2 
                text-sm 
                rounded-md 
                bg-slate-900 
                text-white 
                border border-slate-800 
                focus:border-indigo-500 
                outline-none
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock size={14} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="
                w-full 
                h-9 
                pl-8 
                pr-2 
                text-sm 
                rounded-md 
                bg-slate-900 
                text-white 
                border border-slate-800 
                focus:border-indigo-500 
                outline-none
              "
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="w-full h-9 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Register"}
          </motion.button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
