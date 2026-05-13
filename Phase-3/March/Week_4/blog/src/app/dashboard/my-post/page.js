"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

export default function MyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((p) => p._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-black mb-10">My Posts</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white p-6 rounded-2xl shadow border"
          >
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-3">
              {post.content}
            </p>

            <div className="flex justify-between mt-6">
              
              {/* EDIT */}
              <Link
                href={`/dashboard/edit-post/${post.slug}`}
                className="text-blue-600 font-bold flex items-center gap-1"
              >
                <Pencil size={16} /> Edit
              </Link>

              {/* DELETE */}
              <button
                onClick={() => handleDelete(post._id)}
                className="text-red-600 font-bold flex items-center gap-1"
              >
                <Trash2 size={16} /> Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}