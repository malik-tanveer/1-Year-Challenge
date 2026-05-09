// Login or backend

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const user = await User.findOne({
            email: body.email,
            password: body.password,
        });

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 });
        }

        if (user.password !== body.password) {
            return NextResponse.json(
                { message: "Wrong password" },
                { status: 401 });
        }

        return NextResponse.json({
            message: "Login Success",
            user,
        });

    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 });
    }
}