'use client'

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white ">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/blog.png" width={40} height={40} alt="logo" />
        <span className="text-black font-bold text-lg">MyApp</span>
      </div>

      {/* Links */}
      <div className="flex gap-6 font-medium">
        <Link href="/" className="text-black">Home</Link>
        <Link href="/about" className="text-black">About</Link>
      </div>

      {/* User Image */}
      <div>
        <Image
          src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!w700wp"
          width={40}
          height={40}
          alt="User Profile"
          className="rounded-full"
        />
      </div>

    </nav>
  );
};

export default Navbar;