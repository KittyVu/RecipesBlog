import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import { secretKey } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import * as jose from "jose"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    const user = await prisma.users.findUnique({ where: { username }, });
    if (!user) {
      return NextResponse.json({ msg: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ msg: "Invalid credentials" }, { status: 401 });
    }

    const secret = new TextEncoder().encode(secretKey);
    const token = await new jose.SignJWT({
      id: user.id,
      username: user.username,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    const response = NextResponse.json({
      msg: "Logged in successfully",
      user: {
        id: user.id,
        username: user.username,
        exp: Math.floor(Date.now() / 1000) + 3600, // optional: token expiry
      },
    });

    response.headers.set(
      "Set-Cookie",
      serialize("token", token, { httpOnly: true, path: "/" })
    );

    return response;
    
  } catch (error: any) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json({ msg: "Server error" }, { status: 500 });
  }
}
