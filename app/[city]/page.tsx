import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CalculatorProvider } from "@/components/providers/CalculatorProvider";
import { MarketProvider } from "@/components/providers/MarketProvider";
import { CityIntro } from "@/components/sections/CityIntro";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LivePrices } from "@/components/sections/LivePrices";
import { MetalCalculator } from "@/components/sections/MetalCalculator";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { StructuredData } from "@/components/seo/StructuredData";
import { allCities, CITY_PREFIX, cityPath, findCity } from "@/data/cities";
import { FAQ_ITEMS } from "@/data/faq";
import { COMPANY } from "@/data/site";
import { getMarketSnapshot } from "@/lib/market/provider";
import type { City } from "@/types/city";
import type { FaqItem } from "@/types/common";

/** Same refresh as the home page: fresh prices for the first paint every minute. */
export const revalidate = 60;

/** Only the cities in data/cities exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return allCities().map(({ city }) => ({ city: `${CITY_PREFIX}${city.slug}` }));
}

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = findCity((await params).city);
  if (!found) return {};
  const { city } = found;
  const path = cityPath(city);
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: path,
      siteName: "Cash 4 Gold",
      title: city.metaTitle,
      description: city.metaDescription,
      images: [{ url: "/images/og-cash-4gold.jpg", width: 1200, height: 630, alt: `Goldankauf ${city.name} – Cash 4 Gold` }],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
      images: ["/images/og-cash-4gold.jpg"],
    },
  };
}

/** City questions first, then the general ones. */
function cityFaqItems(city: City): FaqItem[] {
  const own = city.faqs.map((f, i) => ({
    id: `${city.slug}-${i + 1}`,
    topic: "ankauf" as const,
    topicLabel: city.name,
    question: f.question,
    answer: f.answer,
  }));
  return [...own, ...FAQ_ITEMS];
}

export default async function CityPage({ params }: Props) {
  const found = findCity((await params).city);
  if (!found) notFound();
  const { city, state } = found;

  const snapshot = await getMarketSnapshot();
  const faqItems = cityFaqItems(city);

  return (
    <MarketProvider initial={snapshot}>
      <CalculatorProvider>
        <StructuredData faqItems={faqItems} city={{ name: city.name, stateName: state.name, url: `${COMPANY.siteUrl}${cityPath(city)}` }} />
        <Header />
        <main id="main">
          <Hero title={["Goldankauf", `in ${city.name}`, "zum Tagespreis."]} text={city.heroText} label={`${city.name} · per Post`} />
          <CityIntro city={city} stateName={state.name} />
          <LivePrices />
          <MetalCalculator />
          <Services />
          <HowItWorks />
          <Trust />
          <Reviews />
          <FAQ items={faqItems} />
          <Contact />
        </main>
        <Footer />
      </CalculatorProvider>
    </MarketProvider>
  );
}
