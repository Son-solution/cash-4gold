import { FAQ_ITEMS } from "@/data/faq";
import { COMPANY } from "@/data/site";
import type { FaqItem } from "@/types/common";

interface CityContext {
  name: string;
  stateName: string;
  /** Absolute URL of the city page. */
  url: string;
}

/**
 * JSON-LD for the business and the FAQ (facts only from the company data).
 * City pages add a Service served in that city and a breadcrumb trail.
 */
export function StructuredData({ faqItems = FAQ_ITEMS, city }: { faqItems?: FaqItem[]; city?: CityContext }) {
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
    mainEntity: faqItems.filter((f) => !f.answer.includes("[")).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const cityGraph = city && [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Goldankauf",
      name: `Goldankauf ${city.name}`,
      url: city.url,
      provider: { "@type": "Organization", name: COMPANY.name, url: COMPANY.siteUrl },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: city.stateName },
      },
      description: `Online- und Versandankauf von Gold, Silber, Platin und Palladium für ${city.name} – bewertet nach aktuellem Börsenkurs.`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${COMPANY.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: `Goldankauf ${city.name}`, item: city.url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {cityGraph?.map((entry) => (
        <script key={entry["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}
    </>
  );
}
