"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (

<>
<nav class="flex justify-center items-center gap-6 pt-4">
  <Link style={{ color: pathname === "/" ? "red" : "black" }} href="/">Home</Link>
  <Link style={{ color: pathname === "/about" ? "red" : "black" }} href="/about">About</Link>
  <Link style={{ color: pathname === "/contact" ? "red" : "black" }} href="/contact">Contact</Link>
  <Link style={{ color: pathname === "/blog" ? "red" : "black" }} href="/blog">Blog</Link>
  <Link style={{ color: pathname === "/blog/1212" ? "red" : "black" }} href="/blog/1212">Blog ID's</Link>
  <Link style={{ color: pathname === "/customer" ? "red" : "black" }} href="/customer">Customer</Link>
  <Link style={{ color: pathname === "/customer/u12" ? "red" : "black" }} href="/customer/u12">Product ID's</Link>
  <Link style={{ color: pathname === "/customer/shop" ? "red" : "black" }} href="/customer/shop">Customer Shop</Link>
  <Link style={{ color: pathname === "/user" ? "red" : "black" }} href="/user">User</Link>
  <Link style={{ color: pathname === "/user/12r" ? "red" : "black" }} href="/user/12r">User Id's</Link>

  </nav>

</>
  )
}

export default Navbar