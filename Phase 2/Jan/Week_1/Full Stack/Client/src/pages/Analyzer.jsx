import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Analyzer = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await axios.post("http://localhost:5000/api/analyze", {
        text,
      });

      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6"
      >
        <h1 className="text-2xl font-bold text-white text-center">
          AI Text Analyzer
        </h1>
        <p className="text-center text-slate-400 text-sm mb-4">
          Enter text and get instant analysis
        </p>

        {/* TEXT AREA */}
        <textarea
          rows="5"
          placeholder="Write your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none focus:border-blue-600"
        />

        {/* BUTTON */}
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Text"}
        </button>

        {/* ERROR */}
        {error && (
          <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
        )}

        {/* RESULT */}
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-5 bg-slate-950 border border-slate-800 rounded-lg p-4 text-slate-200"
          >
            <p>
              <span className="text-slate-400">Word Count:</span>{" "}
              {result.wordCount}
            </p>

            <p className="mt-2">
              <span className="text-slate-400">Preview:</span>{" "}
              {result.preview}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Analyzer;
