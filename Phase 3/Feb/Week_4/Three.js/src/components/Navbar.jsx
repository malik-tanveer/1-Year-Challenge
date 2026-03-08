import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { X, Menu } from "lucide-react";

function Navbar () {
const [open, setOpen] = useState(false);
const sidebarRef = useRef(null);
const closeRef = useRef(null);

useEffect(() => {
  if (open) {

    // sidebar entry animation
    gsap.fromTo(
      sidebarRef.current,
      { x: 300, scale: 0.9, rotate: 5, opacity: 0 },
      {
        x: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }
    );

  } else {

    // exit animation
    gsap.to(sidebarRef.current, {
      x: 300,
      scale: 0.9,
      rotate: -5,
      opacity: 0,
      duration: 0.6,
      ease: "power3.in"
    });

  }
}, [open]);

const navLinksLeft = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
];

const navLinksRight = [
  { name: "Services", id: "services" },
  { name: "Hire Me", id: "whyhireme" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];
// const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#e3e3e3]/20 backdrop-blur-lg w-[80%] max-w-6xl rounded-full shadow-xl z-50 border border-[#e3e3e3]/30">
        <div className="flex items-center px-12  h-20 ">

          {/* Left Links */}
          <ul className="hidden md:flex items-center gap-10 text-[15px] font-bold text-[#0a0f2c]">
            {navLinksLeft.map((link) => (
              <li key={link.name} className="relative cursor-pointer group">
                <a
                  href={`#${link.id}`}
                  className="transition-colors duration-300 group-hover:text-[#001f5c]"
                >
                  {link.name}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001f5c] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="flex items-center justify-center mx-[80px] md:mx-[86px]">
            <img
              src="/logo2.png"
              alt="Logo"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain"
            />
          </div>

          {/* Right Links */}

          <ul className="hidden md:flex items-center gap-10 ml-auto text-[15px] font-bold text-[#0a0f2c]">
            {navLinksRight.map((link) => (
              <li key={link.name} className="relative cursor-pointer group">
                <a
                  href={`#${link.id}`}
                  className="transition-colors duration-300 group-hover:text-[#001f5c]"
                >
                  {link.name}
                </a>

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001f5c] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden ml-auto text-2xl"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[50%] max-w-sm
  shadow-2xl
  transform transition-transform duration-500 z-50 rounded-tl-[120px] 
  ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{
          backgroundColor: "white",
          backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
    `,
          backgroundSize: "35px 35px"
        }}
      >
        <div className="flex flex-col justify-between h-full p-8 text-[#0a0f2c] font-bold relative">

          {/* Close Button INSIDE Sidebar */}
          <button
            ref={closeRef}
            onClick={() => {
              gsap.to(closeRef.current, {
                rotate: 180,
                duration: 0.4
              });
              setOpen(false);
            }}
            className="absolute top-6 right-6 text-4xl font-bold"
          >
            <X />
          </button>

          {/* Links */}
          <div className="space-y-6 text-lg mt-16">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="block cursor-pointer hover:text-[#001f5c] transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Social */}
          <div className="flex flex-col space-y-3 text-sm">
            <a href="#" className="hover:text-[#001f5c] transition">
              LinkedIn
            </a>
            <a href="mailto:your@email.com" className="hover:text-[#001f5c] transition">
              Email
            </a>
          </div>

        </div>
      </div>
      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setOpen(false)} />}
    </>
  );
}


export default Navbar;