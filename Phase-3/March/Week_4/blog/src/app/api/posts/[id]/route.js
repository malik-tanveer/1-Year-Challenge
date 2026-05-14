// Post ID Backend

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";


// GET SINGLE POST
export async function GET(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    console.log(id);

    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Invalid ID" },
      { status: 500 }
    );
  }
}


// UPDATE POST
export async function PUT(req, context) {

  try {

    await connectDB();

    const { id } = await context.params;

    const body = await req.json();

    const updatedPost = await Post.findByIdAndUpdate(

      id,

      {
        title: body.title,
        content: body.content,
      },

      { new: true }

    );

    return NextResponse.json({
      message: "Post Updated!",
      updatedPost,
    });

  } catch (error) {

    return NextResponse.json(
      { message: "Update failed" },
      { status: 500 }
    );
  }
}

// DELETE POST
export async function DELETE(req, context) {

  try {

    await connectDB();

    const { id } = await context.params;
    
    await Post.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Post Deleted Successfully",
    });

  } catch (error) {

    return NextResponse.json(
      { message: "Delete failed" },
      { status: 500 }
    );
  }
}