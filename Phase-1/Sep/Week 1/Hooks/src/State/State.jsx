import { useState } from "react";

const State = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('')
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Usestate in React</h1>

      <div className="counter-container">
        <div className="counter-card">
          <h1 className="count">{count}</h1>

          <div className="btn-group">
            <button onClick={() => setCount(count + 1)} className="btn increase">
              Increase
            </button>
            <button onClick={() => setCount(count - 1)} className="btn decrease">
              Decrease
            </button>
          </div>
        </div>
      </div>

      <div className="password-container">
        <h2>Password Toggle Example</h2>
        <div className="input-group">
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button onClick={() => setShow(!show)} className="toggle-btn">
            {show ? "Hide" : "Show"}
          </button>
        </div>
        <p>Your Password: {password}</p>
      </div>
    </>
  );
};

export default State;
