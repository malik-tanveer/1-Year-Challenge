import { useReducer } from "react";

// ---------------- COUNTER ----------------
function counterReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

// ---------------- FORM ----------------
type FormState = {
  name: string;
  email: string;
  errors: string[];
};

const initialFormState: FormState = {
  name: "",
  email: "",
  errors: [],
};

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERRORS"; payload: string[] }
  | { type: "RESET" };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
}

// ---------------- MAIN COMPONENT ----------------
export default function CounterAndFormApp() {
  // Counter reducer
  const [count, counterDispatch] = useReducer(counterReducer, 0);

  // Form reducer
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors: string[] = [];

    if (!formState.name) errors.push("Name is required");
    if (!formState.email.includes("@")) errors.push("Email must be valid");

    if (errors.length > 0) {
      formDispatch({ type: "SET_ERRORS", payload: errors });
    } else {
      alert("Form submitted ✅");
      console.log(formState);
      formDispatch({ type: "RESET" });
    }
  };

  return (
    <>
      {/* Counter Section */}
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => counterDispatch({ type: "increment" })}>+</button>
        <button onClick={() => counterDispatch({ type: "decrement" })}>-</button>
        <button onClick={() => counterDispatch({ type: "reset" })}>Reset</button>
      </div>

      <hr />

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={formState.name}
          onChange={(e) =>
            formDispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={formState.email}
          onChange={(e) =>
            formDispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => formDispatch({ type: "RESET" })}>
          Reset
        </button>

        {formState.errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {formState.errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}

/*
useReducer in React
🔎 Kya hai?

useReducer ek advanced hook hai jo state ko manage karta hai ek reducer function ke zariye.

Ye useState ka alternative hai, specially jab state complex ya multiple values wali ho.

Redux ka chhota version samajh lo (React ka built-in).

/** */