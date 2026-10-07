import { NextResponse, type NextRequest } from "next/server";
import { refreshStoredPrices } from "@/lib/market/gold-sohn-provider";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

/**
 * Scrapes gold-sohn.de and stores the prices in Redis.
 * Called by Vercel Cron (vercel.json) or an external scheduler with
 * `Authorization: Bearer <CRON_SECRET>`. On failure the previous prices stay untouched.
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return NextResponse.json({ ok: false, error: "CRON_SECRET is not set" }, { status: 500 });
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  try {
    const stored = await refreshStoredPrices();
    return NextResponse.json({ ok: true, updatedAt: stored.sourceUpdatedAt ?? stored.scrapedAt });
  } catch (error) {
    console.error("[cron/prices] scrape failed:", error);
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "scrape_failed" }, { status: 500 });
  }
}
