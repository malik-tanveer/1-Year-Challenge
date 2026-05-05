"use client"

import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);


        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password"),
            }),
        });

        const data = await res.json();

        if (res.ok) {

            localStorage.setItem("user", JSON.stringify(data.user));
            console.log(data.user)
            alert("Login Success");

            router.push("/dashboard");
        } else {
            alert(data.message || "Login Failed");
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
                        Login
                    </h1>

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

                    <button className="bg-blue-500 text-white w-full py-2 rounded">
                        Login
                    </button>

                    <p className="text-sm text-center mt-4">
                        I am New {" "}
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={() => router.push("/signup")}
                        >
                            Signup
                        </span>
                    </p>

                </form>

            </div>
        </>
    )
}