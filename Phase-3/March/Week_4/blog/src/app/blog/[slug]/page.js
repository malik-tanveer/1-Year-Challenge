// app/blog/[slug]/page.js

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  User,
  BookOpen,
} from "lucide-react";

export default async function BlogPost({ params }) {

  const { slug } = await params;

  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const allPosts = await res.json();

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">
          <h1 className="text-5xl font-black text-red-500 mb-4">
            404
          </h1>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Post Not Found
          </h2>

          <p className="text-gray-600 mb-8">
            The blog post you are trying to access does not exist.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back To Blogs
          </Link>
        </div>
      </div>
    );
  }

return (
  <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

  {/* HERO */}
  <section className="relative overflow-hidden">

    {/* Blur Effects */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

    <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">

      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back To Blogs
      </Link>

      {/* 🔥 SINGLE POST LABEL */}
      <div className=" m-6 inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
        <BookOpen className="w-4 h-4" />
        Single Blog Post
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8 break-words">
        {post.title}
      </h1>

      {/* AUTHOR INFO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            {post.author?.charAt(0)}
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </h3>

            <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
              <CalendarDays className="w-4 h-4" />
              Published on{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>

  {/* CONTENT */}
  <section className="pb-24 px-6">

    <div className="max-w-4xl mx-auto">

      <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-10 md:p-14">

        {/* LABEL */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-10">
          <BookOpen className="w-4 h-4" />
          Article Content
        </div>

        {/* CONTENT */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

          {post.content.split("\n").map((para, index) => (
            <p key={index} className="mb-8 text-lg leading-9">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[35px] p-10 text-white shadow-2xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-3xl font-black mb-3">
              Thanks For Reading
            </h2>

            <p className="text-blue-100 text-lg max-w-2xl">
              Keep learning, keep building, and keep sharing your knowledge with the developer community.
            </p>
          </div>

          <Link
            href="/blog"
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  </section>
</article>
)
}