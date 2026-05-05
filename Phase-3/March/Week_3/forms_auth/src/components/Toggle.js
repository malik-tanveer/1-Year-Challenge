'use client'

import { useState } from "react";
import Hero from "./Hero"

export default function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => setShow(!show)}
        className="bg-black text-white px-4 py-2"
      >
        Toggle
      </button>

      {show && <p className="mt-4">Hello 👋 
        <Hero/>
        </p>}
    </div>
  );
}