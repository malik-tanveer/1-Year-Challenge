'use client'

import { useState } from "react";

const Hero = () => {
  const [name, setName] = useState('')
  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-10 gap-5">
        <input className="border p-2 " value={name} placeholder="Enter anyone ??" type="text" onChange={(e) => setName(e.target.value)} />

        <h1>Hello  {name}</h1>
      </div>
      
    </>
  )
}

export default Hero;