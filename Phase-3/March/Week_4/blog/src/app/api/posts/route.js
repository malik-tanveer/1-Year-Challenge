// Post Backedn

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

// GET ALL POSTS
export async function GET() {
    try {
        await connectDB();
        
        const posts = await Post.find().sort({ createdAt: -1 });

        return NextResponse.json(posts);

    } catch (err) {
        return NextResponse.json(
            { message: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}

// Create a Post
export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const post = await Post.create({

            title: body.title,
            slug : body.title.toLowerCase().replaceAll(" ", "-"),
            content: body.content,
            author: body.author,
        });

        return NextResponse.json({
            message: "Post Created",
            post,
        });

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            { message: "Failed to create post" },
            { status: 500 }
        );
    }
}