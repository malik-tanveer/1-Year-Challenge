import { useState, useEffect } from "react";
import axios from "axios";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const apiURL = "https://jsonplaceholder.typicode.com/posts/1"; // dummy GET request

  // GET: Fetch initial count (simulate)
  const fetchCount = async () => {
    try {
      const res = await axios.get(apiURL);
      setCount(res.data.id); // using id as dummy count
    } catch (err) {
      console.error(err);
    }
  };

  // POST/PUT simulation (just logging, real API not needed)
  const updateCount = async (newCount: number) => {
    try {
      await axios.put(apiURL, { id: newCount });
      setCount(newCount);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Counter App</h2>
      <div className="text-4xl font-bold mb-4">{count}</div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => updateCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Increase
        </button>
        <button
          onClick={() => updateCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Decrease
        </button>
        <button
          onClick={() => updateCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
