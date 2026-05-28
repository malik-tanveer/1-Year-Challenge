"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import {
  Pencil,
  Save,
  ArrowLeft,
  FileText,
  Sparkles,
} from "lucide-react";

export default function EditPost() {

  const router = useRouter();

  // GET SLUG
  const params = useParams();

  const slug = params.slug;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [postId, setPostId] = useState("");

  // FETCH POST
  useEffect(() => {

    const fetchPost = async () => {

      try {

        const res = await fetch("/api/posts");

        const posts = await res.json();

        // FIND POST USING SLUG
        const singlePost = posts.find(
          (p) => p.slug === slug
        );

        if (singlePost) {

          setPostId(singlePost._id);

          setTitle(singlePost.title);

          setContent(singlePost.content);

        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    if (slug) {
      fetchPost();
    }

  }, [slug]);

  // UPDATE POST
  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      setSaving(true);

      const res = await fetch(`/api/posts/${postId}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          content,
        }),

      });

      if (res.ok) {

        router.push(`/blog/${slug}`);

      }

    } catch (error) {

      console.log(error);

    } finally {

      setSaving(false);

    }

  };

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

        <div className="bg-white px-10 py-8 rounded-3xl shadow-2xl border border-gray-100 text-center">

          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

          <h2 className="text-2xl font-black text-gray-900">
            Loading Post...
          </h2>

          <p className="text-gray-500 mt-2">
            Please wait while we fetch your article.
          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-6">

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="max-w-4xl mx-auto relative z-10">

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white">

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">

              <Sparkles className="w-4 h-4" />
              Dashboard Editor
            </div>

            <h1 className="text-5xl font-black leading-tight mb-4">
              Edit Your Blog Post
            </h1>

            <p className="text-blue-100 text-lg max-w-2xl">
              Update your article title and content easily.
            </p>
          </div>

          <form
            onSubmit={handleUpdate}
            className="p-10 md:p-14"
          >

            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">

                <FileText className="w-4 h-4 text-blue-600" />
                Blog Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title..."
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 outline-none text-gray-800 text-lg font-semibold"
              />
            </div>

            <div className="mb-10">

              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
                <Pencil className="w-4 h-4 text-blue-600" />
                Blog Content
              </label>

              <textarea
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content..."
                className="w-full bg-gray-50 border border-gray-200 rounded-3xl px-6 py-5 outline-none  text-gray-700 leading-8 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-5">

              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-3"
              >
                <Save className="w-5 h-5" />
                {saving ? "Updating..." : "Update Blog Post"}
              </button>

              <button
                type="button"
                onClick={() => router.push(`/blog/${slug}`)}
                className="px-8 py-5 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 font-bold text-gray-700"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}