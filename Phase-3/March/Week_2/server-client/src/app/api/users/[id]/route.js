// users dummy data
// let users = [
//     {id : 1, name : "Raza"},
//     {id : 2, name : "Usman"}
// ]

import { connectDB } from "@/lib/db";
import User from "@/models/user";
import { NextResponse} from "next/server";


// UPDATE (PUT)
export async function PUT(req, { params }) {
  await connectDB();

  const { id } = await params;
  const body = await req.json();

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { name: body.name },
    { new: true }
  );

  return NextResponse.json(updatedUser);
}

// DELETE
export async function DELETE(req, { params }) {
  await connectDB();

  const { id } = await params;

  await User.findByIdAndDelete(id);

  return NextResponse.json({ message: "User Deleted" });
}