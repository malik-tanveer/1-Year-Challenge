import { useState } from "react";

export default function SimpleValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors: { email?: string; password?: string } = {};

    // Email validation
    if (!email.includes("@")) {
      newErrors.email = "Email must include @";
    }

    // Password validation
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    // If no errors
    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted");
      console.log({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Validation Example</h2>

      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
