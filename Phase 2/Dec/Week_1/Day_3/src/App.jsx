import Props_2 from "./components/Props_2"
import Props_1 from "./components/Props_1"
import Props_3 from "./components/Props_3"
import State_1 from "./components/State_1"
import { useState } from "react"

function App() {

  const [data , SetData] = useState("inital commit!");
  const name = "Hashmi";
  const a = 5;
  const b = 10;

  return (
    <>
      <div>
        <h1>Props Data Passing Showing this all result</h1>
          <Props_1 />
          <Props_2 />
          <Props_3 names={name} num1={a} num2={b} />
      </div>
      <div>
        <h1>States Data Passing Showing all results</h1>
        <State_1 State={data} />
      </div>
    </>
  );
}

export default App;