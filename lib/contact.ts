/**
 * Contact request: shared validation (client + API route) and the client
 * submit function. No backend is faked — see app/api/contact/route.ts.
 */

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  weight: string;
  categories: string[];
  message: string;
  consent: boolean;
  /** Optional data handed over from the calculator. */
  estimate?: {
    metal: string;
    purity: string;
    weight: number;
    pieces: number;
    total: number;
  };
}

export type ContactField = "name" | "email" | "phone" | "consent";
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s/-]{6,}$/;

export function validateContact(data: Pick<ContactRequest, "name" | "email" | "phone" | "consent">): ContactErrors {
  const errors: ContactErrors = {};
  if (data.name.trim().length < 2) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!data.email.trim()) errors.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = "Bitte prüfen Sie das Format der E-Mail-Adresse.";
  if (data.phone.trim() && !PHONE_RE.test(data.phone.trim())) errors.phone = "Bitte prüfen Sie die Telefonnummer.";
  if (!data.consent) errors.consent = "Bitte stimmen Sie der Datenverarbeitung zu.";
  return errors;
}

export class ContactSubmitError extends Error {
  constructor(
    public code: "not_configured" | "validation" | "network" | "server",
    message: string,
  ) {
    super(message);
  }
}

/**
 * ─────────────────────────────────────────────────────────────
 *  CONNECT THE CONTACT FORM BACKEND HERE
 * ─────────────────────────────────────────────────────────────
 * By default requests go to the local API route (/api/contact), which
 * validates the data and answers 501 until an email/CRM integration is
 * added there. Alternatively set NEXT_PUBLIC_CONTACT_ENDPOINT to an
 * external form provider URL that accepts JSON POST requests.
 */
export async function submitContactRequest(payload: ContactRequest): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";
  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ContactSubmitError("network", "Netzwerkfehler");
  }
  if (res.ok) return;
  const data = (await res.json().catch(() => null)) as { error?: string } | null;
  if (res.status === 501 || data?.error === "not_configured") {
    throw new ContactSubmitError("not_configured", "Formular-Backend ist noch nicht angebunden");
  }
  if (res.status === 422) throw new ContactSubmitError("validation", "Ungültige Eingaben");
  throw new ContactSubmitError("server", `HTTP ${res.status}`);
}
