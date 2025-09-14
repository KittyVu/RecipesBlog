
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password, email, name, phone } = body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to Postgres
    const user = await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
        name,
        phone: Number(phone),
        role: "user", 
      },
    });

    return NextResponse.json({ msg: "User registered successfully", user });
  } catch (error: any) {
    console.error("Register ERROR:", error);
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
}
