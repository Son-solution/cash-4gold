import type { NavItem, ProcessStep, TrustPillar } from "@/types/common";

/** Company facts — taken from the existing cash-4gold.de website. */
export const COMPANY = {
  name: "Cash 4 Gold",
  tagline: "Edelmetall-Ankauf – fair, transparent, persönlich.",
  phoneDisplay: "+49 160 8002101",
  phoneShort: "0160 8002101",
  phoneHref: "tel:+491608002101",
  email: "info@cash-4gold.de",
  emailHref: "mailto:info@cash-4gold.de",
  hours: "Mo–Fr, 8:00–17:00 Uhr",
  hoursShort: "Mo–Fr 8–17 Uhr",
  street: "In der Hofreite 17",
  postalCode: "65207",
  city: "Wiesbaden",
  addressNote: "Reine Verwaltungsadresse – kein Ladengeschäft, kein Büro mit Kundenverkehr. Ankauf ausschließlich online und per Post.",
  insuredShippingLimit: "2.500 €",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cash-4gold.de",
} as const;

export const MAIN_NAV: NavItem[] = [
  { label: "Startseite", href: "#top", sectionId: "top" },
  { label: "Gold Ankauf", href: "#ankauf", sectionId: "ankauf" },
  { label: "Edelmetalle", href: "#ankauf" },
  { label: "Aktuelle Preise", href: "#preise", sectionId: "preise" },
  { label: "So funktioniert's", href: "#ablauf", sectionId: "ablauf" },
  { label: "Über uns", href: "#ueber", sectionId: "ueber" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
  { label: "Kontakt", href: "#kontakt", sectionId: "kontakt" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "berechnen", title: "Wert berechnen", text: "Mit dem Wertrechner in Sekunden eine unverbindliche Schätzung erhalten.", icon: "calculator" },
  { id: "einsenden", title: "Einsenden", text: "Kostenloses Versandpaket anfordern oder selbst senden – versichert bis 2.500 €.", icon: "package" },
  { id: "bewertung", title: "Bewertung", text: "Gewicht und Feingehalt jedes Stücks werden fachgerecht geprüft.", icon: "search" },
  { id: "angebot", title: "Angebot", text: "Sie erhalten ein transparentes Angebot auf Basis des Tageskurses.", icon: "document" },
  { id: "auszahlung", title: "Auszahlung", text: "Nach Ihrer Zusage überweisen wir schnell auf Ihr Konto.", icon: "bank" },
];

export const SHIPPING_OPTIONS = [
  "Kostenloses Versandpaket",
  "Selbst versichert versenden",
  "Abholung bei größeren Mengen",
  "Ab 2.500 € kostenloser Werttransport",
];

export const TRUST_PILLARS: TrustPillar[] = [
  { id: "markt", title: "Aktuelle Marktpreise", text: "Unsere Preise folgen dem Börsenkurs und werden mehrmals täglich aktualisiert.", icon: "chart" },
  { id: "transparenz", title: "Transparente Bewertung", text: "Jede Position ist aufgeschlüsselt: Gewicht, Feingehalt und Kurs.", icon: "eye" },
  { id: "sicher", title: "Sichere Abwicklung", text: "Versicherter Versand bis 2.500 €, darüber kostenloser Werttransport.", icon: "shield" },
  { id: "schnell", title: "Schnelle Auszahlung", text: "Nach Prüfung und Ihrer Zusage wird zügig überwiesen.", icon: "bolt" },
  { id: "kosten", title: "Keine versteckten Kosten", text: "Versand, Prüfung und Angebot sind für Sie kostenfrei.", icon: "tag" },
];

export const TRUST_FACTS = [
  "Versicherter Versand bis 2.500 €",
  "Darüber kostenloser Werttransport",
  "Telefonische Beratung Mo–Fr, 8–17 Uhr",
  "Ausschließlich Online- & Versandankauf",
];

export const FOOTER_LINKS = {
  unternehmen: [
    { label: "Über uns", href: "#ueber" },
    { label: "So funktioniert's", href: "#ablauf" },
    { label: "Aktuelle Preise", href: "#preise" },
    { label: "Wertrechner", href: "#rechner" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  ankauf: [
    { label: "Gold Ankauf", href: "#ankauf" },
    { label: "Silber Ankauf", href: "#ankauf" },
    { label: "Platin Ankauf", href: "#ankauf" },
    { label: "Palladium Ankauf", href: "#ankauf" },
    { label: "Zahngold Ankauf", href: "#ankauf" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export const CONTACT_CATEGORIES = [
  "Altgold & Schmuck",
  "Goldmünzen",
  "Goldbarren",
  "Zahngold",
  "Silber",
  "Platin / Palladium",
  "Uhren",
] as const;
