import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Info, LogIn, UserPlus } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-gray-900 rounded-2xl p-8 text-center space-y-6"
      >

        <h1 className="text-3xl font-bold text-white">
          Welcome to Auth Project
        </h1>


        <p className="text-slate-400 text-sm leading-relaxed">
          A full stack authentication project built with React, Context API,
          JWT and Express. Secure routes, clean UI and simple AI-based features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Link
            to="/analysis"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-lg"
          >
            Go to Analysis
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-lg"
          >
            <ShieldCheck size={18} />
            Go to Dashboard
          </Link>
          <Link
            to="/about"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg"
          >
            <Info size={18} />
            Read About
          </Link>
        </div>

        <div className="flex justify-center gap-4 pt-4 border-t border-gray-800">
          <Link
            to="/login"
            className="flex items-center gap-1 text-slate-300 hover:text-white text-sm"
          >
            <LogIn size={16} />
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-1 text-slate-300 hover:text-white text-sm"
          >
            <UserPlus size={16} />
            Register
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
