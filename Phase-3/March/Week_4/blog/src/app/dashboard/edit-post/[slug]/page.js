"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Save } from "lucide-react";

export default function EditPost({ params }) {
  const router = useRouter();
  const { id } = params;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // GET SINGLE POST
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();

      setTitle(data.title);
      setContent(data.content);
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  // UPDATE POST
  const handleUpdate = async () => {
    setSaving(true);

    await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setSaving(false);
    router.push("/dashboard/my-post");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Loading Post...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-6 flex items-center justify-center">

      <div className="w-full max-w-3xl bg-white p-10 rounded-3xl shadow-2xl border">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
          <Pencil className="text-blue-600" />
          <h1 className="text-3xl font-black text-gray-900">
            Edit Post
          </h1>
        </div>

        {/* TITLE */}
        <div className="mb-6">
          <label className="text-sm font-bold text-gray-600">
            Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 p-4 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title..."
          />
        </div>

        {/* CONTENT */}
        <div className="mb-8">
          <label className="text-sm font-bold text-gray-600">
            Content
          </label>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full mt-2 p-4 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your content..."
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleUpdate}
          disabled={saving}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition"
        >
          <Save size={18} />
          {saving ? "Updating..." : "Update Post"}
        </button>

      </div>
    </div>
  );
}