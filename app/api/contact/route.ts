import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContact, type ContactRequest } from "@/lib/contact";

/**
 * Contact form endpoint.
 *
 * Validates the request and sends it as a plain-text email via SMTP
 * (IONOS mailbox, see SMTP_* in .env.example). Without SMTP settings it
 * answers 501 "not_configured" so the UI shows an honest error state with
 * the phone number.
 */

/** Cuts user input to a sane length and strips line breaks where they don't belong. */
function clean(value: unknown, max: number, singleLine = true) {
  const text = String(value ?? "").slice(0, max).trim();
  return singleLine ? text.replace(/[\r\n]+/g, " ") : text;
}

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT) || 587;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(request: Request) {
  let body: Partial<ContactRequest>;
  try {
    body = (await request.json()) as Partial<ContactRequest>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const data = {
    name: clean(body.name, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 50),
    weight: clean(body.weight, 50),
    message: clean(body.message, 5000, false),
    categories: Array.isArray(body.categories) ? body.categories.slice(0, 20).map((c) => clean(c, 50)) : [],
    consent: Boolean(body.consent),
  };

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });
  }

  const transport = getTransport();
  if (!transport) {
    return NextResponse.json(
      { error: "not_configured", message: "Contact delivery is not configured. Set SMTP_* in the environment." },
      { status: 501 },
    );
  }

  const estimate = body.estimate;
  const lines = [
    "Neue Anfrage über das Formular auf cash-4gold.de",
    "",
    `Name:      ${data.name}`,
    `E-Mail:    ${data.email}`,
    `Telefon:   ${data.phone || "–"}`,
    `Gewicht:   ${data.weight || "–"}`,
    `Kategorien: ${data.categories.length ? data.categories.join(", ") : "–"}`,
  ];
  if (estimate && typeof estimate === "object") {
    lines.push(
      "",
      "Aus dem Rechner:",
      `  Metall:    ${clean(estimate.metal, 30)}`,
      `  Feingehalt: ${clean(estimate.purity, 30)}`,
      `  Gewicht:   ${Number(estimate.weight) || 0} g`,
      `  Stück:     ${Number(estimate.pieces) || 0}`,
      `  Schätzung: ${(Number(estimate.total) || 0).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}`,
    );
  }
  lines.push("", "Nachricht:", data.message || "–", "", "Einwilligung Datenverarbeitung: ja");

  const from = process.env.SMTP_USER!;
  try {
    await transport.sendMail({
      from: `"Cash 4 Gold Website" <${from}>`,
      to: process.env.CONTACT_TO || from,
      replyTo: { name: data.name, address: data.email },
      subject: `Neue Anfrage von ${data.name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("Contact mail failed", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
