import { connectDB }  from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const user = await User.findOne({
            email : body.email,
            password : body.password,
        });

        if (!user) {
            return Response.json(
                {message : "Invalid credentials"},
                {status : 401}
            );
        }

        return Response.json({
            message : "Login Success",
            user,
        });
 
    } catch (err) {
        console.log(err);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
}