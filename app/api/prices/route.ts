import { NextResponse } from "next/server";
import { getMarketSnapshot } from "@/lib/market/provider";

export const dynamic = "force-dynamic";

/** Returns the current MarketSnapshot for the client-side live refresh. */
export async function GET() {
  try {
    const snapshot = await getMarketSnapshot();
    return NextResponse.json(snapshot, {
      headers: { "Cache-Control": "public, max-age=30, stale-while-revalidate=60" },
    });
  } catch {
    return NextResponse.json({ error: "market_unavailable" }, { status: 503 });
  }
}
