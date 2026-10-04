import type { MetalId } from "./metal";

export interface NavItem {
  label: string;
  href: string;
  /** Section id used for the active-section indicator. */
  sectionId?: string;
}

export type ServiceVisual =
  | { kind: "photo"; src: string; alt: string; position?: string }
  | { kind: "object"; src: string; alt: string; width: number; height: number }
  | { kind: "element"; symbol: string; atomicNumber: string; atomicMass: string; elementName: string };

export interface ServiceCategory {
  id: string;
  name: string;
  group: string;
  short: string;
  description: string;
  visual: ServiceVisual;
  /** Thumbnail in the index list (photo or object image). Element categories show their symbol instead. */
  thumb?: { src: string; alt: string; position?: string };
  /** Metal + purity used for the indicative price and for preselecting the calculator. */
  priceRef: { metal: MetalId; purity: string; label: string };
}

export interface ProcessStep {
  id: string;
  title: string;
  text: string;
  icon: "calculator" | "package" | "search" | "document" | "bank";
}

export interface TrustPillar {
  id: string;
  title: string;
  text: string;
  icon: "chart" | "eye" | "shield" | "bolt" | "tag";
}

export interface Review {
  id: string;
  quote: string;
  name: string;
  meta: string;
  initials: string;
  /** Placeholder entries must be replaced with real, verified reviews. */
  isPlaceholder: boolean;
}

export type FaqTopic = "preis" | "versand" | "auszahlung" | "ankauf";

export interface FaqItem {
  id: string;
  topic: FaqTopic;
  topicLabel: string;
  question: string;
  answer: string;
}

export interface OfferDraft {
  metal: MetalId;
  purity: string;
  weight: number;
  pieces: number;
}
