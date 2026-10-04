import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CalculatorProvider } from "@/components/providers/CalculatorProvider";
import { MarketProvider } from "@/components/providers/MarketProvider";
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
import { getMarketSnapshot } from "@/lib/market/provider";

/** Re-generate the page (with fresh prices for the first paint) every 5 minutes. */
export const revalidate = 300;

export default async function HomePage() {
  const snapshot = await getMarketSnapshot();

  return (
    <MarketProvider initial={snapshot}>
      <CalculatorProvider>
        <StructuredData />
        <Header />
        <main id="main">
          <Hero />
          <LivePrices />
          <MetalCalculator />
          <Services />
          <HowItWorks />
          <Trust />
          <Reviews />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </CalculatorProvider>
    </MarketProvider>
  );
}
