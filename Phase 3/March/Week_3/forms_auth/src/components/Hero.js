'use client'

import { useState } from "react";

const Hero = () => {
  const [name, SetName] = useState('')
  return (
    <>
      <div className="bg-gray flex flex-col items-center justify-center mt-10 gap-5">
        <input className="border p-2 bg-gray" value={name} placeholder="Enter anyone ??" type="text" onChange={(e) => SetName(e.target.value)} />

        <h1>Hello  {name}</h1>


      </div>
      
    </>
  )
}

export default Hero;