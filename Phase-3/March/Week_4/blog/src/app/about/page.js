// app/about/page.js

import Link from "next/link";
import {
  Code2,
  Database,
  ShieldCheck,
  Globe,
  ArrowRight,
  Sparkles,
  BookOpen,
  User,
  Rocket,
  Layers3,
} from "lucide-react";

export default function About() {

  const techStack = [
    "Next.js 14",
    "MongoDB",
    "Tailwind CSS",
    "Mongoose",
    "REST APIs",
    "Auth.js",
    "React.js",
    "JavaScript",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium shadow-sm mb-8">
              <Sparkles className="w-4 h-4" />
              About The Developer
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              The Developer
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Behind The Screen
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer building modern web
              applications with Next.js, MongoDB, APIs, authentication,
              and beautiful UI experiences.
            </p>

          </div>
        </div>

      </section>

      {/* MAIN ABOUT */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8">

              <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100">

                <div className="w-16 h-16 rounded-3xl bg-blue-100 flex items-center justify-center mb-8">
                  <User className="w-8 h-8 text-blue-600" />
                </div>

                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  My Journey
                </h2>

                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">

                  <p>
                    Hello! I am a full-stack developer in progress.
                    I started learning modern web development and
                    entered the world of Next.js in March 2024.
                  </p>

                  <p>
                    From small UI projects to building complete
                    full-stack applications, this journey helped me
                    understand frontend development, backend APIs,
                    databases, authentication systems, and responsive design.
                  </p>

                  <p>
                    This blogging platform is not just a project —
                    it represents learning, consistency, creativity,
                    and real-world development practice.
                  </p>

                </div>

              </div>

              {/* PURPOSE CARD */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[32px] p-10 text-white shadow-2xl">

                <div className="w-16 h-16 rounded-3xl bg-white/20 flex items-center justify-center mb-8">
                  <Rocket className="w-8 h-8" />
                </div>

                <h2 className="text-4xl font-black mb-6">
                  Purpose Of This Project
                </h2>

                <p className="text-lg leading-relaxed opacity-95">
                  The goal of this platform is to create a clean and
                  modern space where developers can publish blogs,
                  share knowledge, improve skills, and practice
                  real-world full-stack development concepts.
                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* TECH STACK */}
              <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100">

                <div className="w-16 h-16 rounded-3xl bg-indigo-100 flex items-center justify-center mb-8">
                  <Layers3 className="w-8 h-8 text-indigo-600" />
                </div>

                <h2 className="text-4xl font-black text-gray-900 mb-8">
                  Current Tech Stack
                </h2>

                <div className="grid sm:grid-cols-2 gap-5">

                  {techStack.map((tech) => (
                    <div
                      key={tech}
                      className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-blue-50 transition"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-green-600" />
                      </div>

                      <span className="font-semibold text-gray-800">
                        {tech}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-6">

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

                  <Database className="w-12 h-12 text-blue-600 mb-5" />

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Database
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    MongoDB and Mongoose for scalable data handling.
                  </p>

                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

                  <ShieldCheck className="w-12 h-12 text-green-600 mb-5" />

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Authentication
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Protected routes and secure login system.
                  </p>

                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

                  <Globe className="w-12 h-12 text-purple-600 mb-5" />

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Full Stack
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Frontend + backend integration using Next.js.
                  </p>

                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

                  <BookOpen className="w-12 h-12 text-orange-600 mb-5" />

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Learning
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Building projects to improve real-world development skills.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="pb-28 px-6">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-14 text-center text-white shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Explore The Platform
          </h2>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
            Read developer blogs, learn modern technologies,
            and start sharing your own ideas publicly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            <Link
              href="/blog"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              Explore Blogs
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/dashboard/create-post"
              className="border border-white/30 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition duration-300"
            >
              Create Post
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}