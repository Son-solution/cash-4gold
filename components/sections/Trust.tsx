import { Fragment } from "react";
import { Icon } from "@/components/ui/Icon";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SECTION_INTRO_ALIGN } from "@/components/ui/SectionHeading";
import { TRUST_FACTS, TRUST_PILLARS } from "@/data/site";

/** Trust / advantages: only facts from the existing site, no invented claims. */
export function Trust() {
  return (
    <section id="ueber" aria-labelledby="ueber-title" className="section-y bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-20">
          <div className="flex flex-col gap-3.5 md:gap-4">
            <Reveal>
              <Eyebrow number="06" label="Warum Cash 4 Gold" />
            </Reveal>
            <MaskedLines
              id="ueber-title"
              as="h2"
              className="m-0 text-center font-display text-[34px] leading-[1.06] font-normal tracking-[-0.02em] md:text-[48px] md:leading-[1.02] lg:text-left lg:text-[62px] lg:tracking-[-0.025em]"
              lines={[
                <Fragment key="l1">Fairness, die man</Fragment>,
                <Fragment key="l2">
                  <Accent>nachrechnen</Accent> kann.
                </Fragment>,
              ]}
            />
          </div>
          <Reveal>
            <p className={`m-0 max-w-[560px] text-[15px] leading-[1.65] text-muted md:text-[16px] lg:text-[16.5px] ${SECTION_INTRO_ALIGN}`}>
              Gewicht, Feingehalt, Tageskurs – jede Position Ihres Angebots ist nachvollziehbar. Sie entscheiden in Ruhe, ohne Druck.
            </p>
          </Reveal>
        </div>

        <Reveal stagger={0.08} y={20} className="mt-7 md:mt-10 lg:mt-[52px]">
          <ul className="m-0 grid list-none grid-cols-1 border-t border-ink p-0 md:grid-cols-2 md:gap-x-10 lg:grid-cols-5 lg:gap-x-0">
            {TRUST_PILLARS.map((pillar, i) => (
              <li
                key={pillar.id}
                data-reveal
                className={
                  "group grid grid-cols-[46px_minmax(0,1fr)] gap-4 border-b border-line py-5 md:flex md:flex-col md:gap-2.5 md:py-[26px] lg:border-b-0 lg:px-6 lg:pt-7 lg:pb-0 " +
                  (i === 0 ? "lg:pl-0 " : "lg:border-l lg:border-line ") +
                  (i === TRUST_PILLARS.length - 1 ? "md:col-span-2 lg:col-span-1 lg:pr-0" : "")
                }
              >
                <span className="flex items-center justify-between">
                  <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-gold-tint text-gold-ink md:h-auto md:w-auto md:bg-transparent md:text-gold-deep">
                    <Icon name={pillar.icon} size={24} strokeWidth={1.4} className="transition-transform duration-200 ease-out-soft group-hover:-translate-y-0.5 md:h-[26px] md:w-[26px]" />
                  </span>
                  <span className="hidden font-mono text-[10.5px] text-faint lg:inline">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <span className="flex flex-col gap-1 md:gap-2.5">
                  <h3 className="m-0 font-display text-[22px] leading-[1.15] font-normal transition-colors duration-200 group-hover:text-gold-ink md:mt-2 md:text-[25px]">
                    {pillar.title}
                  </h3>
                  <p className="m-0 text-[14px] leading-[1.55] text-muted md:text-[14.5px] md:leading-[1.6]">{pillar.text}</p>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-6 md:mt-8 lg:mt-10">
          <ul className="m-0 grid list-none grid-cols-1 gap-2.5 rounded-[20px] border border-[#F1EBDF] bg-cream p-0 px-5 py-4 text-[13.5px] text-body md:grid-cols-2 md:gap-x-6 md:gap-y-3 md:px-6 lg:flex lg:h-[62px] lg:items-center lg:justify-between lg:rounded-full lg:px-7 lg:py-0">
            {TRUST_FACTS.map((fact) => (
              <li key={fact} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
                {fact}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
