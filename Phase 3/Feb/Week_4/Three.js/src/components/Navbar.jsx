import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-semibold font-heading tracking-wide">
          TANVEER
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-body text-sm tracking-wide">
          <li className="cursor-pointer hover:opacity-60 transition">About</li>
          <li className="cursor-pointer hover:opacity-60 transition">Work</li>
          <li className="cursor-pointer hover:opacity-60 transition">Experience</li>
          <li className="cursor-pointer hover:opacity-60 transition">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-6 py-6 space-y-4 text-sm">
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Work</p>
          <p className="cursor-pointer">Experience</p>
          <p className="cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
}