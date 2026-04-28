// Dummy user

// let users = [
//     {id : 1, name : "Raza"},
//     {id : 2, name : "Usman"}
// ]


import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

// GET the Data from MongoDB
export async function GET() {
  await connectDB();

  const users = await User.find();

  return NextResponse.json(users);
}

// POST Save the databse
export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const newUser = await User.create({
    name: body.name,
  });

  return NextResponse.json(newUser, { status: 201 });
}