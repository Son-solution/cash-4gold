import type { FaqItem, FaqTopic } from "@/types/common";

export const FAQ_TOPICS: { id: FaqTopic | "alle"; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "preis", label: "Preis" },
  { id: "versand", label: "Versand & Service" },
  { id: "auszahlung", label: "Angebot & Auszahlung" },
  { id: "ankauf", label: "Ankauf" },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "preisermittlung",
    topic: "preis",
    topicLabel: "Preis",
    question: "Wie wird der Ankaufspreis ermittelt?",
    answer:
      "Grundlage ist der aktuelle Börsenkurs des jeweiligen Edelmetalls, der mehrmals täglich aktualisiert wird. Wir ermitteln Gewicht und Feingehalt Ihrer Stücke und berechnen daraus einen transparenten Preis – ohne versteckte Gebühren.",
  },
  {
    id: "versandkosten",
    topic: "versand",
    topicLabel: "Versand",
    question: "Kostet mich der Versand etwas?",
    answer:
      "Nein. Auf Wunsch erhalten Sie ein kostenloses Versandpaket. Der Versand ist bis zu einem Wert von 2.500 € versichert; darüber organisieren wir einen kostenlosen Werttransport.",
  },
  {
    id: "auszahlungsdauer",
    topic: "auszahlung",
    topicLabel: "Auszahlung",
    question: "Wie schnell erhalte ich mein Geld?",
    answer:
      "Nach Eingang und Prüfung erhalten Sie Ihr Angebot. Sobald Sie zustimmen, veranlassen wir die Auszahlung zügig per Überweisung.",
  },
  {
    id: "angebot-ablehnen",
    topic: "auszahlung",
    topicLabel: "Angebot",
    question: "Was passiert, wenn ich das Angebot ablehne?",
    // Confirm the actual return conditions before going live.
    answer:
      "Unser Angebot ist unverbindlich. [Rücksendebedingungen bitte bestätigen – z. B. kostenlose, versicherte Rücksendung Ihrer Stücke.]",
  },
  {
    id: "beschaedigt",
    topic: "ankauf",
    topicLabel: "Ankauf",
    question: "Kaufen Sie auch beschädigten Schmuck?",
    answer:
      "Ja. Wir kaufen Schmuck in jedem Zustand – defekt, verbogen, einzelne Ohrringe oder gerissene Ketten. Entscheidend sind Gewicht und Feingehalt.",
  },
  {
    id: "zahngold",
    topic: "ankauf",
    topicLabel: "Ankauf",
    question: "Kaufen Sie auch Zahngold an?",
    answer: "Ja. Kronen, Brücken und Inlays bewerten wir nach Legierung und Edelmetallanteil.",
  },
  {
    id: "ladengeschaeft",
    topic: "versand",
    topicLabel: "Service",
    question: "Haben Sie ein Ladengeschäft oder Büro?",
    answer:
      "Nein. Wir kaufen ausschließlich online und per Post an – deutschlandweit. Wir unterhalten weder ein Ladengeschäft noch ein Büro mit Kundenverkehr; unsere Adresse in Wiesbaden ist eine reine Verwaltungsadresse.",
  },
];
