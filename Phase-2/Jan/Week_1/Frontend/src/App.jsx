import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

        {/* Navbar */}
        <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            MyApp
          </Link>

          {/* Links */}
          <div className="flex gap-6 text-lg">
            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-gray-400 text-center py-6">
          <p className="text-sm">
            © 2026 MyApp. Built with React, Tailwind & Docker.
          </p>
        </footer>

      </div>
    </BrowserRouter>
  );
};

export default App;
