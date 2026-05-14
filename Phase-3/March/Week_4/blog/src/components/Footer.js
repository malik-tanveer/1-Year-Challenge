// components/Footer.jsx

import Link from "next/link";
import {
  // Github,
  // Linkedin,
  // Mail,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white border-t border-white/10">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  DevBlog
                </h2>

                <p className="text-sm text-gray-400">
                  Modern Blogging Platform
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-relaxed">
              A modern full-stack blogging platform built with
              Next.js, MongoDB, authentication, dashboards,
              and developer-focused features.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  Home
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  About
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  Blog
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  Help Center
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

            </ul>

          </div>

          {/* DASHBOARD */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Dashboard
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/dashboard/create-post"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  Create Post
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/edit-post"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  Edit Post
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/my-post"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  My Posts
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  Login
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:developer@example.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                {/* <Mail className="w-5 h-5" /> */}
                developer@example.com
              </a>

              <a
                href="github.com/malik-tanveer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                {/* <Github className="w-5 h-5" /> */}
                GitHub Profile
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                {/* <Linkedin className="w-5 h-5" /> */}
                LinkedIn Profile
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 DevBlog. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            Made with
            using Next.js & Tailwind CSS
          </div>

        </div>

      </div>

    </footer>
  );
}