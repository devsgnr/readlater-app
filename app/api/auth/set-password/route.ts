import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession(req);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const response = await auth.api.setPassword({ body: body, headers: req.headers });

    return NextResponse.json({ ...response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}
