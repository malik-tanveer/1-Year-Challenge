// app/help/page.js

import Link from "next/link";
import {
  HelpCircle,
  ShieldCheck,
  PenSquare,
  FileEdit,
  UserCircle,
  Mail,
  ArrowRight,
  BookOpen,
  Sparkles,
  MessageCircleMore,
} from "lucide-react";

export default function Help() {

  const faqs = [
    {
      q: "How do I create a new blog post?",
      a: "After logging into your account, go to the dashboard and click on the 'Create Post' button. You can write your title, content, and publish instantly."
    },

    {
      q: "Can I edit or delete my posts later?",
      a: "Yes. Every blog post has edit and delete options available inside your dashboard so you can manage your content anytime."
    },

    {
      q: "Why did we build this platform?",
      a: "This platform was created to help developers and writers share ideas publicly, practice modern web development, and build an online presence."
    },

    {
      q: "Is authentication secure?",
      a: "Yes. We use protected routes and secure authentication methods to keep user accounts and dashboard data safe."
    },

    {
      q: "What technologies are used in this project?",
      a: "This project is built using Next.js App Router, MongoDB, Tailwind CSS, API Routes, and Authentication features."
    },

    {
      q: "Can beginners use this blogging platform?",
      a: "Absolutely. The UI is designed to be simple, modern, and beginner-friendly for both developers and writers."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium shadow-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Support & Documentation
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Help Center &
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                FAQs
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn how this blogging platform works, why we built it,
              and how you can create, manage, and publish blogs easily.
            </p>

          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            <Link
              href="/about"
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300"
            >
              <BookOpen className="w-12 h-12 text-blue-600 mb-5" />

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                About Project
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Learn the purpose, goals, and technologies behind this platform.
              </p>
            </Link>

            <Link
              href="/blog"
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300"
            >
              <PenSquare className="w-12 h-12 text-purple-600 mb-5" />

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Explore Blogs
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Discover blog posts written by developers and community members.
              </p>
            </Link>

            <Link
              href="/dashboard/create-post"
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300"
            >
              <FileEdit className="w-12 h-12 text-green-600 mb-5" />

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Create Post
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Start writing and publishing your own blogs in minutes.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-lg text-gray-600">
              Everything you need to know about the platform.
            </p>

          </div>

          <div className="space-y-8">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300"
              >

                <div className="flex items-start gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-blue-600" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {faq.q}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {faq.a}
                    </p>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY WE BUILT THIS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* LEFT */}
              <div className="p-12">

                <div className="w-16 h-16 rounded-3xl bg-indigo-100 flex items-center justify-center mb-8">
                  <MessageCircleMore className="text-indigo-600 w-8 h-8" />
                </div>

                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Why We Built This Platform?
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  This project was created to practice real-world full stack
                  development using modern technologies like Next.js,
                  MongoDB, authentication systems, protected routes,
                  API handling, and responsive UI design.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  The goal is to help developers write blogs, share knowledge,
                  improve their coding skills, and build an online developer
                  presence in a modern and beautiful environment.
                </p>

              </div>

              {/* RIGHT */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white flex flex-col justify-center">

                <div className="space-y-8">

                  <div className="flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200" />

                    <div>
                      <h3 className="font-bold text-2xl mb-2">
                        Secure Authentication
                      </h3>

                      <p className="opacity-90">
                        Protected routes and secure dashboard system.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <UserCircle className="w-8 h-8 text-blue-200" />

                    <div>
                      <h3 className="font-bold text-2xl mb-2">
                        Developer Friendly
                      </h3>

                      <p className="opacity-90">
                        Built for developers who want to learn and grow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <BookOpen className="w-8 h-8 text-blue-200" />

                    <div>
                      <h3 className="font-bold text-2xl mb-2">
                        Knowledge Sharing
                      </h3>

                      <p className="opacity-90">
                        Publish tutorials, experiences, and coding guides.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}