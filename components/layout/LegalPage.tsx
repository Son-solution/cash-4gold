import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { COMPANY } from "@/data/site";

/** Simple, readable layout for legal pages (Impressum, Datenschutz, AGB). */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="container-site flex h-16 items-center justify-between md:h-[76px]">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo/cash-4gold-logo.png" alt="" width={1200} height={783} sizes="60px" className="h-8 w-auto md:h-[38px]" />
            <span className="font-display text-[18px]">{COMPANY.name}</span>
          </Link>
          <Link href="/" className="text-[14px] font-medium text-gold-ink hover:underline">
            ← Zur Startseite
          </Link>
        </div>
      </header>
      <main id="main" className="bg-cream">
        <article className="container-site max-w-[860px] py-14 md:py-20">
          <h1 className="m-0 font-display text-[40px] leading-tight font-normal md:text-[54px]">{title}</h1>
          <div className="mt-8 flex flex-col gap-5 text-[16px] leading-[1.7] text-body [&_h2]:mt-6 [&_h2]:mb-0 [&_h2]:font-display [&_h2]:text-[26px] [&_h2]:font-normal [&_h2]:text-ink [&_p]:m-0">
            {children}
          </div>
        </article>
      </main>
    </>
  );
}
