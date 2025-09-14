import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";
import { secretKey } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("Cookie token:", token); 

  if (!token) {
    return NextResponse.json({ loggedIn: false, user: null });
  }

  try {
    const secret = new TextEncoder().encode(secretKey); 
    console.log("This is secret on session before payload: ", secret)

    const { payload } = await jose.jwtVerify(token, secret);
    console.log("Decoded after payload: ", payload)
    return NextResponse.json({ loggedIn: true, user: payload });
  } catch (err) {
    console.error("JWT verification failed:", err);
    return NextResponse.json({ loggedIn: false, user: null });
  }
}
