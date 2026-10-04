import { Fragment } from "react";
import { Icon } from "@/components/ui/Icon";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SECTION_INTRO_ALIGN } from "@/components/ui/SectionHeading";
import { COMPANY } from "@/data/site";
import { ContactForm } from "./contact/ContactForm";

const NEXT_STEPS = [
  { label: "01 · Anfrage", text: "Formular oder Anruf – unverbindlich" },
  { label: "02 · Rückmeldung", text: "persönlich, mit erster Einschätzung" },
  { label: "03 · Versandpaket", text: "kostenlos und versichert" },
];

/** Final conversion step: phone first, then email, then the offer request form. */
export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="section-y bg-champagne">
      <div className="container-site grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-[minmax(0,1fr)_600px] lg:items-start lg:gap-[72px]">
        <div className="flex flex-col gap-4 md:gap-[18px]">
          <Reveal>
            <Eyebrow number="09" label="Kontakt & Angebot" />
          </Reveal>
          <MaskedLines
            id="kontakt-title"
            as="h2"
            className="m-0 text-center font-display text-[36px] leading-none font-normal tracking-[-0.025em] md:text-[50px] lg:text-left lg:text-[62px]"
            lines={[
              <Fragment key="l1">Bereit für Ihr</Fragment>,
              <Fragment key="l2">
                <Accent>Angebot?</Accent>
              </Fragment>,
            ]}
          />
          <Reveal>
            <p className={`m-0 max-w-[540px] text-[15px] leading-[1.6] text-muted md:text-[16px] lg:text-[16.5px] ${SECTION_INTRO_ALIGN}`}>
              Rufen Sie an, schreiben Sie uns – oder fordern Sie Ihr kostenloses, unverbindliches Angebot direkt an.
            </p>
          </Reveal>

          <Reveal stagger={0.08} className="mt-2 grid grid-cols-1 gap-2.5 md:mt-3 md:grid-cols-2 md:gap-3 lg:grid-cols-1">
            <a
              data-reveal
              href={COMPANY.phoneHref}
              className="group grid grid-cols-[50px_minmax(0,1fr)_20px] items-center gap-3.5 rounded-[20px] bg-gold px-[18px] py-4 shadow-[0_18px_40px_rgba(212,163,42,0.34)] transition-[transform,box-shadow] duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(212,163,42,0.4)] active:scale-[0.98] md:grid-cols-[52px_minmax(0,1fr)] md:px-5 md:py-[18px] lg:grid-cols-[58px_minmax(0,1fr)_44px] lg:rounded-[22px] lg:px-[22px] lg:py-5"
            >
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white md:h-[52px] md:w-[52px] lg:h-[58px] lg:w-[58px]">
                <Icon name="phone" size={21} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[12px] font-semibold text-[#3A2E0C] md:text-[12.5px]">Am schnellsten · {COMPANY.hoursShort}</span>
                <span className="font-display text-[25px] md:text-[26px] lg:text-[32px]">{COMPANY.phoneDisplay}</span>
              </span>
              <span aria-hidden="true" className="flex items-center justify-center text-[17px] md:hidden lg:flex lg:h-11 lg:w-11 lg:rounded-full lg:border lg:border-ink/30 lg:transition-colors lg:group-hover:bg-white">
                →
              </span>
            </a>
            <a
              data-reveal
              href={COMPANY.emailHref}
              className="group grid grid-cols-[50px_minmax(0,1fr)_20px] items-center gap-3.5 rounded-[20px] border border-line-2 bg-white px-[18px] py-4 transition-colors duration-200 hover:border-gold md:grid-cols-[52px_minmax(0,1fr)] md:px-5 md:py-[18px] lg:grid-cols-[58px_minmax(0,1fr)_44px] lg:rounded-[22px] lg:px-[22px]"
            >
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E8D6A8] bg-gold-tint text-gold-ink md:h-[52px] md:w-[52px] lg:h-[58px] lg:w-[58px]">
                <Icon name="mail" size={21} strokeWidth={1.6} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[12px] text-soft md:text-[12.5px]">E-Mail · persönliche Antwort</span>
                <span className="font-display text-[22px] break-all md:text-[24px] lg:text-[28px]">{COMPANY.email}</span>
              </span>
              <span aria-hidden="true" className="flex items-center justify-center text-[17px] transition-transform duration-200 group-hover:translate-x-[3px] md:hidden lg:flex lg:h-11 lg:w-11 lg:rounded-full lg:border lg:border-line-2">
                →
              </span>
            </a>
          </Reveal>

          <Reveal stagger={0.06} className="mt-3 grid grid-cols-1 gap-3.5 border-t border-[#E2D4B8] pt-5 md:grid-cols-3 md:gap-4">
            {NEXT_STEPS.map((s) => (
              <span key={s.label} data-reveal className="grid grid-cols-[110px_minmax(0,1fr)] gap-2.5 md:flex md:flex-col md:gap-1">
                <span className="font-mono text-[10.5px] text-gold-ink uppercase">{s.label}</span>
                <span className="text-[13.5px] text-body">{s.text}</span>
              </span>
            ))}
          </Reveal>
          <p className="m-0 text-center text-[12.5px] leading-[1.5] text-soft lg:text-left">
            {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city} · {COMPANY.addressNote}
          </p>
        </div>

        <Reveal y={24}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
