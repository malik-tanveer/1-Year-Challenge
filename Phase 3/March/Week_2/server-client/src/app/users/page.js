import UserList from "@/component/UserList" 

export default async function page() {
    const res = await fetch("http://localhost:3000/api/users",{
        cache: "force-cache"
    });

    const users = await res.json();
    return (
    <div className="mt-12 mb-12">

        <h1 className="font-bold text-4xl p-6 text-center">Users </h1>

        <UserList users={users} />
    </div>
)
}