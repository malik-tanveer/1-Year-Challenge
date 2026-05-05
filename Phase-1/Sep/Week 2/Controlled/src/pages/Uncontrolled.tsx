import { useRef } from "react";

export default function UncontrolledForm() {
  // Refs banaye inputs ke liye
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // DOM se direct value nikalenge
    console.log("Name:", nameRef.current?.value);
    console.log("Email:", emailRef.current?.value);
    console.log("File:", fileRef.current?.files?.[0]?.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form Example</h2>

      <input type="text" placeholder="Enter Name" ref={nameRef} />
      <input type="email" placeholder="Enter Email" ref={emailRef} />
      <input type="file" ref={fileRef} />

      <button type="submit">Submit</button>
    </form>
  );
}
