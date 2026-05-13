// app/blog/page.js

import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  User,
  CalendarDays,
} from "lucide-react";

export default async function BlogPage() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const posts = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">

          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 shadow-sm px-5 py-2 rounded-full text-sm font-medium text-blue-700 mb-8">
            <Sparkles className="w-4 h-4" />
            Modern Developer Blogs
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            Explore Our
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Blog Archive
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tutorials, coding tips, and full-stack development insights.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black text-gray-900">
              Latest Articles
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Explore all stories and developer insights.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post, index) => (

              <article
                key={post._id}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col hover:-translate-y-2"
              >

                {/* TOP INFO */}
                <div className="p-6 flex flex-col flex-1">

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
                    <CalendarDays className="w-4 h-4" />
                    <span>Developer Article</span>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h2>

                  {/* CONTENT */}
                  <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-1">
                    {post.content}
                  </p>

                  {/* FOOTER */}
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">

                    {/* AUTHOR */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {post.author?.charAt(0)}
                      </div>

                      <div>
                        <p className="font-bold text-gray-900 text-sm">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">
                          Blog Author
                        </p>
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-4">

                      {/* READ MORE */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {/* EDIT */}
                      <Link
                        href={`/dashboard/edit-post/${post.slug}`}
                        className="text-green-600 font-bold hover:underline"
                      >
                        Edit
                      </Link>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* EMPTY STATE */}
          {posts.length === 0 && (
            <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-16 text-center mt-10">

              <BookOpen className="w-20 h-20 text-blue-600 mx-auto mb-8" />

              <h2 className="text-4xl font-black text-gray-900 mb-5">
                No Blogs Found
              </h2>

              <p className="text-lg text-gray-600 mb-10">
                Start creating your first blog post.
              </p>

              <Link
                href="/dashboard/create-post"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                Create First Blog
              </Link>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}