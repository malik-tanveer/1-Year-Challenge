// Server Action Add a User from directly files not a API this is a good for fast and Efficient

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import UserList from "@/component/UserList"

async function addUser(formData) {
    "use server"
    await connectDB();

    const name = formData.get("name");
    await User.create({ name });
    revalidatePath("/users")
}
export default async function page() {
    const res = await fetch("http://localhost:3000/api/users", {
        // cache: "force-cache" // use for dummy data or array
        cache: "no-store" //use for real time database
    });

    const users = await res.json();
    return (
        <>
            <div className="text-center mt-10">
                <h1 className="font-bold mt-2">Add a Users</h1>
                <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.</p>
                <form action={addUser} className="mt-4 flex justify-center items-center gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        className="border p-2" />
                    <button className="bg-blue-500 text-white px-4 py-2"> Add Users </button>
                </form>
            </div>

            <div className="mt-12 mb-12">

                <h1 className="font-bold text-4xl p-6 text-center">Users </h1>

                <UserList users={users} />
            </div>
        </>
    )
}