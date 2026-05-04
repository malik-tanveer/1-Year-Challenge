"use client"
import { useRouter } from "next/navigation";


export default function signup(){

    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const res = await fetch("/api/auth/signup", {
            method: "POST",
                        headers : {
                 "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name : formData.get("name"),
                email : formData.get("email"),
                password : formData.get("password"),
            }),
        });

        const data = await res.json();

        if (res.ok) {
            alert("Signup Success");
        router.push("/dashboard");
        } else {
            alert(data.message || "Signup Failed");
        }

    }
    return (
        <>
         <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Signup
        </h1>

        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-3"
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-green-500 text-white w-full py-2 rounded">
          Signup
        </button>

        {/* Switch to login */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>

      </form>

    </div>
        </>
    )
}