import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { COMPANY } from "@/data/site";
import "./globals.css";

// Fonts are self-hosted (app/fonts, SIL Open Font License) via next/font/local:
// no requests to Google at runtime or build time.
const bodoni = localFont({
  src: [
    { path: "./fonts/bodoni-moda-latin-standard-normal.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/bodoni-moda-latin-standard-italic.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-bodoni",
  display: "swap",
  fallback: ["Didot", "Georgia", "serif"],
});

const instrument = localFont({
  src: [{ path: "./fonts/instrument-sans-latin-standard-normal.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-instrument",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

const jetbrains = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "Menlo", "monospace"],
});

const TITLE = "Gold Ankauf zum fairen Tagespreis | Cash 4 Gold Edelmetall-Ankauf";
const DESCRIPTION =
  "Online- und Versandankauf von Altgold, Goldschmuck, Goldmünzen, Goldbarren, Zahngold, Silber, Platin und Palladium: transparent bewertet nach aktuellem Börsenkurs, versicherter Versand, schnelle Auszahlung.";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: TITLE,
    template: "%s | Cash 4 Gold",
  },
  description: DESCRIPTION,
  applicationName: "Cash 4 Gold",
  keywords: ["Gold Ankauf", "Altgold Ankauf", "Goldankauf", "Zahngold Ankauf", "Silber Ankauf", "Platin Ankauf", "Palladium Ankauf", "Goldpreis"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Cash 4 Gold",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/og-cash-4gold.jpg", width: 1200, height: 630, alt: "Cash 4 Gold – Edelmetall-Ankauf" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-cash-4gold.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

/** Adds `js` to <html> before first paint so motion pre-states only apply when scripts run. */
const JS_FLAG = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${bodoni.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className="min-h-dvh bg-white font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
