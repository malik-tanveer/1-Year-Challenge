import { motion } from "framer-motion";
import { Shield, Cpu, Code } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-6"
      >
        <h1 className="text-2xl font-bold text-white text-center mb-2">
          About This Project
        </h1>

        <p className="text-slate-400 text-sm text-center mb-6">
          Full Stack Authentication & AI Text Analysis
        </p>

        <div className="space-y-4 text-slate-300 text-sm">
          <div className="flex gap-3">
            <Shield className="text-blue-500" size={20} />
            <p>
              Secure authentication system using JWT, protected routes and
              React Context API.
            </p>
          </div>

          <div className="flex gap-3">
            <Code className="text-green-500" size={20} />
            <p>
              Backend built with Node.js & Express, following clean and simple
              API structure.
            </p>
          </div>

          <div className="flex gap-3">
            <Cpu className="text-purple-500" size={20} />
            <p>
              AI-inspired text analysis feature that processes user input and
              returns useful insights.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-slate-500 text-xs">
          Built as part of a Full Stack learning journey 🚀
        </p>
      </motion.div>
    </div>
  );
};

export default About;
