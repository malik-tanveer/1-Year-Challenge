'use client'

import Hero from "@/components/Hero"
import Toggle from "@/components/Toggle"
import Count from "@/components/Count"

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl text-center">
        Home Page
      </h1>

      <Hero />

      <h1 className="font-bold text-4xl text-center">
        Count
      </h1>

    
      <Count/>
    
      <h1 className="font-bold text-4xl text-center">
        Toggle
      </h1>

      <Toggle/>
      
    </>
  );
}
