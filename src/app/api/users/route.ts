import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({msg: "Hello from Nextjs API"})
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    return NextResponse.json({msg: `you sent data: username "${body.username}" and pass "${body.password}"`})
}