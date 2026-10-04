import type { Review } from "@/types/common";

/**
 * IMPORTANT: These are clearly marked placeholders. Replace them with real,
 * verified customer reviews (e.g. from Google or Trustpilot) before going live.
 * Do not publish invented reviews.
 */
export const REVIEWS: Review[] = [
  {
    id: "r1",
    quote: "[Echtes Kundenzitat aus einer verifizierten Bewertung – etwa zu Ablauf, Beratung und Auszahlung.]",
    name: "[Vorname N.]",
    meta: "[Ort] · angekauft: [Altgold] · [Datum]",
    initials: "[AB]",
    isPlaceholder: true,
  },
  {
    id: "r2",
    quote: "[Zweites verifiziertes Kundenzitat einfügen – z. B. zur Transparenz der Bewertung.]",
    name: "[Vorname N.]",
    meta: "[Ort] · angekauft: [Goldmünzen] · [Datum]",
    initials: "[CD]",
    isPlaceholder: true,
  },
  {
    id: "r3",
    quote: "[Drittes verifiziertes Kundenzitat einfügen – z. B. zur Geschwindigkeit der Auszahlung.]",
    name: "[Vorname N.]",
    meta: "[Ort] · angekauft: [Zahngold] · [Datum]",
    initials: "[EF]",
    isPlaceholder: true,
  },
];

/** Aggregate rating — fill in from your review platform. */
export const REVIEW_SUMMARY = {
  rating: "[X,X]",
  count: "[Anzahl]",
  platform: "[Google / Trustpilot]",
  url: "#bewertungen",
};
