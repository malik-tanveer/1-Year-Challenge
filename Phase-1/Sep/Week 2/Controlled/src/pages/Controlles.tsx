import { useState } from "react";

export default function ControlledForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Your email is: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
