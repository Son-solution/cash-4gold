import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SECTION_INTRO_ALIGN, SectionTitle } from "@/components/ui/SectionHeading";
import { TimelineProgress } from "@/components/ui/TimelineProgress";
import { PROCESS_STEPS, SHIPPING_OPTIONS } from "@/data/site";

/** "So funktioniert's": five steps on a scroll-driven timeline + shipping options. */
export function HowItWorks() {
  return (
    <section id="ablauf" aria-labelledby="ablauf-title" className="section-y border-t border-[#F1EBDF] bg-cream">
      <div className="container-site">
        <Reveal stagger={0.06} className="flex flex-col gap-3.5 md:gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal className="flex flex-col gap-3.5 md:gap-4">
            <Eyebrow number="05" label="So funktioniert's" />
            <SectionTitle id="ablauf-title">
              Fünf Schritte. <Accent>Ein fairer Preis.</Accent>
            </SectionTitle>
          </div>
          <p data-reveal className={`m-0 max-w-[460px] text-[15px] leading-[1.6] text-muted md:text-[16px] lg:max-w-[380px] ${SECTION_INTRO_ALIGN}`}>
            Reiner Online- und Versandankauf: Alles läuft sicher per Post – deutschlandweit, mit Beratung per Telefon und E-Mail.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 md:mt-10 md:grid-cols-[minmax(0,1fr)_280px] md:gap-10 lg:mt-14 lg:grid-cols-1 lg:gap-12">
          <TimelineProgress steps={PROCESS_STEPS} />

          <Reveal
            y={16}
            className="rounded-[22px] border border-line bg-white p-5 shadow-[0_20px_44px_rgba(60,45,15,0.07)] md:sticky md:top-24 md:p-6 lg:static lg:flex lg:h-20 lg:items-center lg:justify-between lg:rounded-full lg:py-0 lg:pr-3 lg:pl-7"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-[22px]">
              <span className="font-mono text-[10px] tracking-[0.2em] text-subtle lg:text-[10.5px]">VERSANDOPTIONEN</span>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 lg:flex-row lg:gap-[22px]">
                {SHIPPING_OPTIONS.map((opt) => (
                  <li key={opt} className="flex items-center gap-2.5 text-[14.5px]">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 lg:mt-0">
              <Button href="#kontakt" size="md" arrow fullWidth className="lg:!h-14 lg:w-auto">
                Versandpaket anfordern
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
