import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Modern Blog App",
    template: "%s | Modern Blog App",
  },
  description:
    "A modern full-stack blog built with Next.js 14, featuring authentication, CRUD posts, and a clean UI.",
  keywords: [
    "Next.js Blog",
    "Full Stack Blog",
    "React Blog",
    "Web Development",
    "Programming Tutorials",
    "MERN Blog",
  ],
  authors: [{ name: "Developer" }],
  creator: "Developer",
  publisher: "Modern Blog App",

  openGraph: {
    title: "Modern Blog App",
    description:
      "A modern full-stack blog built with Next.js 14 featuring CRUD, auth, and dashboard.",
    url: "http://localhost:3000",
    siteName: "Modern Blog App",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Modern Blog App",
    description:
      "A modern full-stack blog built with Next.js 14 featuring CRUD, auth, and dashboard.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">

        <Navbar />

        <main className="flex-1">
<ProtectedRoute>
      {children}
    </ProtectedRoute>
        </main>

        <Footer />

      </body>
    </html>
  );
}