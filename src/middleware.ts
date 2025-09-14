import { isAuthenticated } from './lib/jwtTokenControl'
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
 const result = await isAuthenticated(req);
 //const result = true;
 console.log("jwt result from middleware: ",result)

  if (!result) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/users", "/users/:path*"],
}
