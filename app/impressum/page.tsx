import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { COMPANY } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <p>
        <strong>Hinweis:</strong> Bitte die vollständigen, rechtlich geprüften Pflichtangaben (§ 5 DDG) aus dem bestehenden Impressum übernehmen.
      </p>
      <h2>Anbieter</h2>
      <p>
        {COMPANY.name}
        <br />
        {COMPANY.street}
        <br />
        {COMPANY.postalCode} {COMPANY.city}
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
        <br />
        E-Mail: <a href={COMPANY.emailHref}>{COMPANY.email}</a>
      </p>
      <h2>Vertretungsberechtigt / Registereintrag / USt-IdNr.</h2>
      <p>[Angaben aus dem bestehenden Impressum einfügen]</p>
    </LegalPage>
  );
}
