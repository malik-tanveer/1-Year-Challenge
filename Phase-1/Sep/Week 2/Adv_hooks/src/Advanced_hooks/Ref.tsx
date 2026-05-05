import { useState, useEffect, useRef } from "react";

export default function CounterWithTitle() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>(0);

  // Update title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    prevCountRef.current = count; // store previous count
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Count: {count}</h1>
      <h3>Previous Count: {prevCountRef.current}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
