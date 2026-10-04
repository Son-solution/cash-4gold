import { FAQ_ITEMS } from "@/data/faq";
import { COMPANY } from "@/data/site";

/** JSON-LD for the business and the FAQ (facts only from the company data). */
export function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    // Organization (not LocalBusiness): online/mail-in only, no premises with customer traffic.
    "@type": "Organization",
    name: COMPANY.name,
    url: COMPANY.siteUrl,
    telephone: COMPANY.phoneDisplay,
    email: COMPANY.email,
    image: `${COMPANY.siteUrl}/images/og-cash-4gold.jpg`,
    logo: `${COMPANY.siteUrl}/logo/cash-4gold-logo.png`,
    description:
      "Ausschließlicher Online- und Versandankauf von Gold, Altgold, Goldschmuck, Goldmünzen, Goldbarren, Zahngold, Silber, Platin und Palladium – deutschlandweit, ohne Ladengeschäft.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: COMPANY.postalCode,
      addressLocality: COMPANY.city,
      addressCountry: "DE",
    },
    areaServed: { "@type": "Country", name: "Deutschland" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: COMPANY.phoneDisplay,
      email: COMPANY.email,
      availableLanguage: "German",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.filter((f) => !f.answer.includes("[")).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
