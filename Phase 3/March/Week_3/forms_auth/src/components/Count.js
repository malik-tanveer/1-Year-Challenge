'use client'

import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="text-center mt-10">
                <h1 className="font-bold text-4xl py-4" >
                    {count}
                </h1>

                <div>

                    <button onClick={() => setCount(count + 1)} className="border rounded-xl bg-green-500 text-white px-4 py-2 m-2">
                        Increase
                    </button>

                    <button onClick={() => setCount(count * 5)} className="border rounded-xl bg-green-800 text-white px-4 py-2 m-2">
                        Multiplay by 5
                    </button>

                    <button onClick={() => setCount(count / 5)} className="border rounded-xl bg-green-800 text-white px-4 py-2 m-2">
                        Divide by 5
                    </button>
                    
                    <button onClick={() => setCount(0)} className="border rounded-xl bg-red-400 text-white px-4 py-2 m-2">
                        Reset
                    </button>


                    <button onClick={() => setCount(count - 1)} className="border rounded-xl bg-red-500 text-white px-4 py-2 m-2">
                        Decrease
                    </button>
                </div>

            </div>
        </>
    )
}

export default Count;