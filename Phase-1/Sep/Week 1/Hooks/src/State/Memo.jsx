import { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // Expensive Calculation (time lagata hai)
  const slowCalculation = (num) => {
    console.log("Heavy Calculation Running...");
    for (let i = 0; i < 1000000000; i++) {} // delay
    return num * 2;
  };

  // useMemo -> sirf count change hone pr calculation hogi
  const doubleNumber = useMemo(() => {
    return slowCalculation(count);
  }, [count]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
    marginTop: "20px",
    border: "1px solid gray",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>

      <div style={themeStyles}>
        <h2>Double: {doubleNumber}</h2>
      </div>
    </div>
  );
};

export default Memo;
