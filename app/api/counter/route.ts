import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
  params: undefined;
}

export async function POST(request: NextRequest, context: Context) {
  const body: { amount: number } = await request.json();
  const { amount } = body;

  // simulate IO latency
  const result: number = await new Promise((resolve) => setTimeout(() => resolve(10), 500));

  return NextResponse.json({ data: amount + result });
}
