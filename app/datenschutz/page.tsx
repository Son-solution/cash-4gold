import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { COMPANY } from "@/data/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        <strong>Hinweis:</strong> Bitte die rechtlich geprüfte Datenschutzerklärung aus der bestehenden Website übernehmen und um die neu eingesetzten
        Dienste ergänzen (Hosting, Kontaktformular-Anbieter, Kurs-API).
      </p>
      <h2>Verantwortliche Stelle</h2>
      <p>
        {COMPANY.name}, {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city} · {COMPANY.email}
      </p>
      <h2>Kontaktformular</h2>
      <p>
        Die im Anfrageformular eingegebenen Daten (Name, E-Mail, optional Telefon, Angaben zu Ihren Edelmetallen) werden ausschließlich zur Bearbeitung
        Ihrer Anfrage verwendet. [Rechtsgrundlage, Speicherdauer und eingesetzten Dienstleister ergänzen]
      </p>
      <h2>Schriftarten</h2>
      <p>Die Schriftarten werden lokal von diesem Server ausgeliefert; es findet keine Verbindung zu Google-Servern statt.</p>
    </LegalPage>
  );
}
