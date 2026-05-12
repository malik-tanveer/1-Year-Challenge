"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookPlus, Send } from "lucide-react";

export default function CreatePostPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/blog");
      } else {
        alert("Post is Can't Created!");
      }

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-20">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

        {/* HEADER */}
        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            <BookPlus className="w-4 h-4" />
            Create New Blog
          </div>

          <h1 className="text-4xl font-black text-gray-900">
            Write Your Story
          </h1>

          <p className="text-gray-600 mt-3">
            Share your thoughts with the developer community
          </p>

        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* TITLE */}
          <div>
            <label className="font-semibold text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={form.title}
              placeholder="Enter blog title..."
              className="w-full mt-2 p-4 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* AUTHOR */}
          <div>
            <label className="font-semibold text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              onChange={handleChange}
              value={form.author}
              placeholder="Your name..."
              className="w-full mt-2 p-4 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="font-semibold text-gray-700">Content</label>
            <textarea
              name="content"
              onChange={handleChange}
              value={form.content}
              placeholder="Write your blog content..."
              rows={8}
              className="w-full mt-2 p-4 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
          >
            <Send className="w-5 h-5" />
            {loading ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>
    </div>
  );
}