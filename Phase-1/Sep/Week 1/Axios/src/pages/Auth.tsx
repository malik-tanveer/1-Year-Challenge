import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        // 🔹 Login
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
      } else {
        // 🔹 Signup
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup Successful!");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: "#4f46e5", background: "none", border: "none", cursor: "pointer" }}
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
