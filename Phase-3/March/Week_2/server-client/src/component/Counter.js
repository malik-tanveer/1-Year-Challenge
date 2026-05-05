'use client'

import { useState } from "react";

export default function Counter() {
const [count, setCount] = useState(0);

return (
    <>
    <div>
<button className="cursor-pointer bg-blue text-black p-4" onClick={() =>setCount(count+1) }>Click Me</button>
<p className="font-bold text-4xl">
    {count}
    </p>
    </div>
    </>
)
}