import { connectDB }  from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const user = await User.create({
            name : body.name,
            email : body.email,
            password : body.password,
        });

        return Response.json({
            message : "User created Successfully",
            user,
        })
    } catch(error) {
        console.log(error)
        return Response.json({ message: "Internal Server Error" }, { status: 500 })
    }
}