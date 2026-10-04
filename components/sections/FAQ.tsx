"use client";

import { useEffect, useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { SelectIndicator } from "@/components/ui/SelectIndicator";
import { FAQ_ITEMS, FAQ_TOPICS } from "@/data/faq";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";
import type { FaqTopic } from "@/types/common";

/** FAQ with topic filter and accessible accordion. Supports deep links (#faq-<id>). */
export function FAQ() {
  const [topic, setTopic] = useState<FaqTopic | "alle">("alle");
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  // Deep link: #faq-versandkosten opens that question (on load and on hash change).
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#faq-", "");
      if (hash && FAQ_ITEMS.some((f) => f.id === hash)) {
        setTopic("alle");
        setOpenId(hash);
        document.getElementById("faq")?.scrollIntoView();
      }
    };
    const frame = window.requestAnimationFrame(openFromHash);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, []);

  const items = FAQ_ITEMS.filter((f) => topic === "alle" || f.topic === topic);

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-white">
      <div className="container-site grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start lg:gap-24">
        <Reveal stagger={0.05} className="flex flex-col gap-4 md:gap-[18px]">
          <div data-reveal>
            <Eyebrow number="08" label="FAQ" />
          </div>
          <div data-reveal>
            <SectionTitle id="faq-title">
              Häufige <Accent>Fragen.</Accent>
            </SectionTitle>
          </div>
          <p data-reveal className="m-0 hidden text-[15.5px] leading-[1.6] text-muted lg:block">
            Nach Thema filtern – die wichtigsten Antworten auf einen Blick.
          </p>
          <div data-reveal role="group" aria-label="FAQ nach Thema filtern" className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {FAQ_TOPICS.map((t) => {
              const on = t.id === topic;
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setTopic(t.id)}
                  className={cn(
                    "relative isolate h-11 rounded-full border px-4 text-[14px] font-medium transition-colors duration-200 md:px-[18px] lg:h-[38px] lg:px-[15px] lg:text-[13.5px]",
                    on ? "border-ink text-white" : "border-line-3 bg-white text-ink hover:border-gold",
                  )}
                >
                  {on && <SelectIndicator layoutId="faq-filter" className="-z-10 rounded-full bg-ink" />}
                  {t.label}
                </button>
              );
            })}
          </div>
          <div data-reveal className="mt-2 hidden flex-col gap-2.5 border-t border-line pt-[22px] lg:flex">
            <HelpBox />
          </div>
        </Reveal>

        <div>
          <Accordion
            openId={openId}
            onToggle={(id) => setOpenId((cur) => (cur === id ? null : id))}
            items={items.map((f) => ({
              id: f.id,
              number: String(FAQ_ITEMS.indexOf(f) + 1).padStart(2, "0"),
              meta: f.topicLabel,
              title: f.question,
              content: <p className="m-0" id={`faq-${f.id}`}>{f.answer}</p>,
            }))}
          />
          <div className="mt-6 flex flex-col gap-2.5 rounded-[20px] bg-champagne p-5 md:mt-7 md:flex-row md:items-center md:justify-between md:gap-5 md:px-6 lg:hidden">
            <HelpBox inline />
          </div>
        </div>
      </div>
    </section>
  );
}

function HelpBox({ inline = false }: { inline?: boolean }) {
  return (
    <>
      <span className="flex flex-col gap-1">
        <span className="font-display text-[22px]">Ihre Frage ist nicht dabei?</span>
        <span className="text-[13.5px] text-muted">Telefonisch und unverbindlich · {COMPANY.hoursShort}</span>
      </span>
      <span className={cn("flex gap-2.5", inline ? "flex-col md:flex-row" : "pt-1")}>
        <Button href={COMPANY.phoneHref} size="sm" icon="phone" fullWidth={inline} className={inline ? "md:w-auto" : ""}>
          Anrufen
        </Button>
        <Button href={COMPANY.emailHref} size="sm" variant="outline" icon="mail" fullWidth={inline} className={inline ? "md:w-auto" : ""}>
          E-Mail schreiben
        </Button>
      </span>
    </>
  );
}
