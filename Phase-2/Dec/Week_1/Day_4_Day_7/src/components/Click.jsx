import { useState } from "react";

function Click (){
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count + 1);
    }

    return (
        <>
            <p>Count: {count}</p>
            <div style={{paddingBottom: "10px" }}>
            <button onDoubleClick={handleClick}>Click a 2 Time and is Increment</button>
            </div>
            <button onClick={handleClick}>Click a 1 Time and is Increment</button>
        </>
    )
}

export default Click;