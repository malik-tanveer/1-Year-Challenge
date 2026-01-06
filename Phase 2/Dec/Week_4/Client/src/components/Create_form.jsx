import axios from "axios";
import { useState } from "react";

const Create_form = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = { name, content, author };

    try {

const res = await axios.post(
  "http://localhost:3000/api/blog",
  form,

);


      console.log("Created:", res.data);
      setMessage("Blog created successfully");

      setName("");
      setContent("");
      setAuthor("");
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
      setMessage(err.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-center mb-2">Create Blog Post</h2>

        {message && (
          <div className="bg-indigo-50 text-indigo-700 text-sm p-3 rounded-lg">
            {message}
          </div>
        )}

        <input
          type="text"
          value={name}
          placeholder="Blog Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <input
          type="text"
          value={author}
          placeholder="Author Name"
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create_form;
