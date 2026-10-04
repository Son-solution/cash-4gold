import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-dvh flex-col items-center justify-center gap-5 bg-cream px-5 text-center">
      <p className="m-0 font-mono text-[12px] tracking-[0.24em] text-gold-ink">404</p>
      <h1 className="m-0 font-display text-[44px] leading-tight font-normal md:text-[60px]">
        Diese Seite gibt es <em className="text-gold-deep">nicht.</em>
      </h1>
      <p className="m-0 max-w-[440px] text-[16px] text-muted">Vielleicht wurde sie verschoben. Zur Startseite mit aktuellen Preisen und dem Wertrechner:</p>
      <Link
        href="/"
        className="inline-flex h-[52px] items-center rounded-full bg-gold px-7 font-semibold shadow-gold transition-colors hover:bg-gold-hover"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
