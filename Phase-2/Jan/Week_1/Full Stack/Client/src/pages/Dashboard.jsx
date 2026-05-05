import { useAuth } from "../context/AuthContext";
import { LogOut, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");


    if (user) {
      return <Navigate to="/dashboard" replace />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 p-6 rounded-xl text-center space-y-4 max-w-md w-full"
      >
        <ShieldCheck size={42} className="text-green-500 mx-auto" />

        <h1 className="text-white text-2xl font-semibold">
          Protected Dashboard
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed">
          This is a secure full stack authentication project built using
          <span className="text-white"> React, Context API, JWT </span>
          and a Node.js backend. Only authenticated users can access this
          dashboard.
        </p>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 mx-auto bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded"
        >
          <LogOut size={18} /> Logout
        </button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
