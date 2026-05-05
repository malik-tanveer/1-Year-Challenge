import { useState, useEffect } from "react";


const Effect = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // cleanup
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };


  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1); // har second badhta rahega
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    // API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>

      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>


      <div>
        <h2>Users from API</h2>
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Timer: {count} seconds</h1>
      </div>

      <div className="timer-container">
        <h1 className="time">{time} sec</h1>
        <div className="btn-group">
          <button onClick={handleStart} className="btn start">
            Start
          </button>
          <button onClick={handleStop} className="btn stop">
            Stop
          </button>
          <button onClick={handleReset} className="btn reset">
            Reset
          </button>
        </div>
      </div>

    </div>
  )
}

export default Effect
