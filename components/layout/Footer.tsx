import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY, FOOTER_LINKS } from "@/data/site";

function LinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const id = `footer-${title.toLowerCase().replace(/[^a-z]/g, "")}`;
  return (
    <nav aria-labelledby={id} className="flex flex-col">
      <h2 id={id} className="m-0 pb-2.5 font-mono text-[10px] font-normal tracking-[0.2em] text-gold-ink uppercase md:text-[10.5px]">
        {title}
      </h2>
      <ul className="m-0 list-none p-0">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="group relative inline-flex min-h-11 items-center text-[14.5px] text-body transition-colors duration-200 hover:text-gold-ink md:min-h-0 md:py-[7px] lg:py-1.5"
            >
              {l.label}
              <span aria-hidden="true" className="absolute bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gold-ink transition-transform duration-200 group-hover:scale-x-100 md:bottom-1" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Premium footer: brand row, grouped links, contact card, legal bar. */
export function Footer() {
  return (
    <footer className="border-t border-[#E5D3A8] bg-white">
      <Reveal y={16} start="top 90%" className="container-site pt-12 pb-7 md:pt-16 lg:pt-[72px]">
        <div className="flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-center md:justify-between md:pb-8 lg:pb-10">
          <a href="#top" className="flex items-center gap-3.5 lg:gap-[18px]">
            <Image src="/logo/cash-4gold-logo.png" alt="Cash 4 Gold Logo" width={1200} height={783} sizes="96px" className="h-12 w-auto md:h-[54px] lg:h-[62px]" />
            <span className="flex flex-col gap-1">
              <span className="font-display text-[22px] md:text-[24px] lg:text-[28px]">{COMPANY.name}</span>
              <span className="text-[12.5px] text-muted md:text-[13.5px]">{COMPANY.tagline}</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <Button href="#rechner" size="md" arrow className="flex-1 md:flex-none">
              Jetzt Wert berechnen
            </Button>
            <a
              href="#top"
              aria-label="Nach oben"
              className="group flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-line-strong transition-colors hover:border-gold"
            >
              <Icon name="arrow-up" size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 pt-7 md:grid-cols-3 md:gap-8 md:pt-9 lg:grid-cols-[1fr_1.1fr_1fr_1.5fr] lg:gap-12 lg:pt-12">
          <LinkGroup title="Unternehmen" links={FOOTER_LINKS.unternehmen} />
          <LinkGroup title="Edelmetall-Ankauf" links={FOOTER_LINKS.ankauf} />
          <div className="col-span-2 md:col-span-1">
            <LinkGroup title="Rechtliches" links={FOOTER_LINKS.rechtliches} />
          </div>
          <address className="col-span-2 flex flex-col gap-2.5 rounded-[20px] border border-line bg-cream px-5 py-5 not-italic md:col-span-3 md:grid md:grid-cols-2 md:gap-5 md:px-6 lg:col-span-1 lg:flex lg:self-start lg:rounded-[22px] lg:px-[26px] lg:py-6">
            <span className="flex flex-col gap-2.5">
              <span className="font-mono text-[10px] tracking-[0.2em] text-gold-ink md:text-[10.5px]">KONTAKT</span>
              <a href={COMPANY.phoneHref} className="font-display text-[24px] hover:text-gold-ink lg:text-[26px]">
                {COMPANY.phoneDisplay}
              </a>
              <a href={COMPANY.emailHref} className="text-[15px] font-semibold hover:text-gold-ink">
                {COMPANY.email}
              </a>
            </span>
            <span className="flex flex-col gap-2.5 md:border-l md:border-line md:pl-5 lg:border-0 lg:pl-0">
              <span className="hidden h-px bg-line lg:block" />
              <span className="flex justify-between text-[13.5px] text-body">
                <span>Telefon Mo–Fr</span>
                <span>8:00–17:00 Uhr</span>
              </span>
              <span className="text-[12.5px] leading-[1.5] text-soft md:text-[13px]">
                {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city}
                <br />
                Reine Verwaltungsadresse – kein Ladengeschäft, kein Kundenverkehr
              </span>
            </span>
          </address>
        </div>

        <div className="mt-10 flex flex-col gap-1.5 border-t border-line pt-5 text-[12px] leading-[1.5] text-soft md:flex-row md:justify-between md:gap-5 md:text-[12.5px] lg:mt-14">
          <span>
            © {new Date().getFullYear()} {COMPANY.name} · Online- & Versandankauf deutschlandweit
          </span>
          <span>Alle Preisangaben unverbindlich – maßgeblich ist das Angebot nach Prüfung.</span>
        </div>
      </Reveal>
    </footer>
  );
}
