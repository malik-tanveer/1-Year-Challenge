"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Menu,
  X,
  ChevronDown,
  PenSquare,
  FileEdit,
  FolderOpen,
} from "lucide-react";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">

      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-lg">
              B
            </div>

            <div>
              <h1 className="text-xl font-black text-gray-900">
                Blogify
              </h1>

              <p className="text-xs text-gray-500">
                Developer Platform
              </p>
            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">

            <Link
              href="/"
              className="font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              href="/help"
              className="font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              Help
            </Link>

            <Link
              href="/blog"
              className="font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              Blog
            </Link>

            {/* DASHBOARD DROPDOWN */}
            <div className="relative group">

              <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 transition">

                Dashboard
                <ChevronDown className="w-4 h-4" />

              </button>

              {/* DROPDOWN */}
              <div className="absolute top-10 left-0 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <div className="space-y-2">

                  {/* CREATE POST */}
                  <Link
                    href="/dashboard/create-post"
                    className="flex items-center gap-3 p-4 rounded-2xl hover:bg-blue-50 transition group/item"
                  >

                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <PenSquare className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 group-hover/item:text-blue-600">
                        Create Post
                      </h3>

                      <p className="text-sm text-gray-500">
                        Publish a new article
                      </p>
                    </div>

                  </Link>

                  {/* UPDATE POST */}
                  <Link
                    href="/dashboard/edit-post"
                    className="flex items-center gap-3 p-4 rounded-2xl hover:bg-green-50 transition group/item"
                  >

                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                      <FileEdit className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 group-hover/item:text-green-600">
                        Update Post
                      </h3>

                      <p className="text-sm text-gray-500">
                        Edit your published blogs
                      </p>
                    </div>

                  </Link>

                  {/* MY POSTS */}
                  <Link
                    href="/dashboard/my-post"
                    className="flex items-center gap-3 p-4 rounded-2xl hover:bg-purple-50 transition group/item"
                  >

                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                      <FolderOpen className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 group-hover/item:text-purple-600">
                        My Posts
                      </h3>

                      <p className="text-sm text-gray-500">
                        Manage all your blogs
                      </p>
                    </div>

                  </Link>

                </div>

              </div>

            </div>

            {/* LOGIN BUTTON */}
            <Link
              href="/login"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Login
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? (
              <X className="w-7 h-7 text-gray-900" />
            ) : (
              <Menu className="w-7 h-7 text-gray-900" />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (

          <div className="lg:hidden mt-6 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">

            <div className="flex flex-col gap-5">

              <Link href="/" className="font-semibold text-gray-700">
                Home
              </Link>

              <Link href="/about" className="font-semibold text-gray-700">
                About
              </Link>

              <Link href="/help" className="font-semibold text-gray-700">
                Help
              </Link>

              <Link href="/blog" className="font-semibold text-gray-700">
                Blog
              </Link>

              <div className="border-t pt-5">

                <h3 className="font-black text-gray-900 mb-4">
                  Dashboard
                </h3>

                <div className="flex flex-col gap-3">

                  <Link
                    href="/dashboard/create-post"
                    className="text-blue-600 font-semibold"
                  >
                    Create Post
                  </Link>

                  <Link
                    href="/dashboard/edit-post"
                    className="text-green-600 font-semibold"
                  >
                    Update Post
                  </Link>

                  <Link
                    href="/dashboard/my-post"
                    className="text-purple-600 font-semibold"
                  >
                    My Posts
                  </Link>

                </div>

              </div>

              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold text-center mt-4"
              >
                Login
              </Link>

            </div>

          </div>

        )}

      </nav>

    </header>
  );
}