import { useAuth } from "../context/AuthContext";
import { LogOut, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // token remove + user null
    navigate("/login"); // 🔥 redirect
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-900 p-6 rounded-xl text-center space-y-4"
      >
        <ShieldCheck size={40} className="text-green-500 mx-auto" />
        <h1 className="text-white text-xl">Protected Dashboard</h1>

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
