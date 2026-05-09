// Register Route for register the user in database

import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const existingUser = await User.findOne({ email: body.email });

        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        const user = await User.create({
            name: body.name,
            email: body.email,
            password: body.password,
        });

        return NextResponse.json({
            message: "User created successfully",
            user,
        });

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }
}