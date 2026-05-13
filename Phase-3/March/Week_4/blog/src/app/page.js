
import React from 'react'
// import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";
import {
  BookOpen,
  Zap,
  Shield,
  MessageCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default async function Home() {

  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 60 },
  });

  const posts = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-20"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 shadow-sm px-5 py-2 rounded-full text-sm font-medium text-blue-700 mb-8">
              <Sparkles className="w-4 h-4" />
              Modern Blog Platform
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
              Write Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ideas Publicly
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A modern blogging platform built with Next.js, MongoDB,
              authentication, protected routes, and a clean dashboard
              experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-10">

              <Link
                href="/dashboard/create-post"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2"
              >
                Create Post
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/blog"
                className="bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
              >
                Explore Blogs
              </Link>


            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Our Platform?
            </h2>

            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              This blogging platform was created to practice full-stack
              development using Next.js, MongoDB, API routes,
              authentication, protected routes, and CRUD operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6">
                <Zap className="text-yellow-500" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Fast Performance
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Optimized with Next.js server rendering and modern architecture.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <BookOpen className="text-blue-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Developer Blogs
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Share coding tutorials, experiences, and technical knowledge.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <Shield className="text-green-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Protected Routes
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Authentication system with secure dashboard access.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <MessageCircle className="text-purple-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Community Growth
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Learn, share, and grow with developers around the world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-14">

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Latest Blog Posts
              </h2>

              <p className="mt-3 text-gray-600">
                Showing only the latest 6 blogs from the platform.
              </p>
            </div>

            <Link
              href="/blog"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All Posts →
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {posts.slice(0, 6).map((post) => (
              <div
                key={post._id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >

                {/* Thumbnail */}
                <div className="h-52 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-7xl font-black text-white">
                  {post.title?.charAt(0)}
                </div>

                {/* Content */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3 leading-relaxed mb-6">
                    {post.content}
                  </p>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {post.author?.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-gray-800">
                          {post.author}
                        </p>

                        <p className="text-xs text-gray-500">
                          Blog Author
                        </p>
                      </div>

                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read More
                    </Link>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Move To Blog Page */}
          <div className="text-center mt-16">

            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition duration-300"
            >
              Move To Blog Page
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-600">
              Learn more about this project and platform.
            </p>

          </div>

          <div className="space-y-6">

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7">
              <h3 className="text-xl font-bold mb-3">
                What is the purpose of this project?
              </h3>

              <p className="text-gray-600 leading-relaxed">
                This project was built to learn full-stack development with
                Next.js, MongoDB, APIs, authentication, protected routes,
                CRUD operations, and dashboard management.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7">
              <h3 className="text-xl font-bold mb-3">
                Can users create and edit posts?
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Yes. Users can create, update, delete, and manage their
                own blog posts from the dashboard.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7">
              <h3 className="text-xl font-bold mb-3">
                Is authentication available?
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Yes. The platform includes login, registration,
                localStorage authentication, and protected routes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-28 pt-10 px-6">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-14 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-black mb-5">
            Start Writing Today
          </h2>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
            Create your account, publish blogs, and build your developer
            presence online.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/dashboard/create-post"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300"
            >
              Go To Dashboard
            </Link>

            <Link
              href="/help"
              className="inline-block bg-black/20 border border-white/20 px-10 py-4 rounded-2xl font-bold hover:bg-black/30 transition duration-300"
            >
              Help Center
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}