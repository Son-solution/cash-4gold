import { NextResponse } from "next/server";
import { validateContact, type ContactRequest } from "@/lib/contact";

/**
 * Contact form endpoint.
 *
 * It validates incoming requests but does NOT send anything yet — it
 * answers 501 "not_configured" so the UI shows an honest error state with
 * the phone number. To go live, deliver the request here (e.g. via an
 * email API such as Resend/Postmark, SMTP, or your CRM) and return
 * `NextResponse.json({ ok: true })`.
 */
export async function POST(request: Request) {
  let body: Partial<ContactRequest>;
  try {
    body = (await request.json()) as Partial<ContactRequest>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const errors = validateContact({
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    consent: Boolean(body.consent),
  });
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });
  }

  // ── Integrate your delivery here, then return { ok: true }. ──
  return NextResponse.json(
    { error: "not_configured", message: "Contact delivery is not configured. See README → Kontaktformular." },
    { status: 501 },
  );
}
