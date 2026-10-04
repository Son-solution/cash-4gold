import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "AGB",
  alternates: { canonical: "/agb" },
};

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <p>
        <strong>Hinweis:</strong> Bitte die geltenden AGB aus der bestehenden Website übernehmen.
      </p>
      <p>[AGB-Text einfügen]</p>
    </LegalPage>
  );
}
