import { useState, useReducer } from "react";

// Reducer function for counter
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

// Reducer function for todos
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const Reduce = () => {
  // Counter reducer
  const [state, dispatchCount] = useReducer(counterReducer, { count: 0 });

  // Todo reducer
  const [todos, dispatchTodo] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      dispatchTodo({ type: "ADD_TODO", payload: task });
      setTask("");
    }
  };

  return (
    <>
      {/* Counter Section */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatchCount({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatchCount({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatchCount({ type: "RESET" })}>Reset</button>
      </div>

      {/* Todo Section */}
      <div style={{ padding: "20px" }}>
        <h2>Todo List</h2>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTodo}>Add</button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() =>
                  dispatchTodo({ type: "REMOVE_TODO", payload: todo.id })
                }
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reduce;
