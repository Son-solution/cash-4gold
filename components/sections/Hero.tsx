import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { COMPANY } from "@/data/site";
import { HeroMotion } from "./hero/HeroMotion";
import { HeroPriceCard } from "./hero/HeroPriceCard";
import { TickerRibbon } from "./hero/TickerRibbon";

const FACTS: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Versichert", text: "Versand bis 2.500 €" },
  { icon: "tag", title: "Kostenfrei", text: "keine versteckten Gebühren" },
  { icon: "phone", title: "Telefonisch", text: "Beratung Mo–Fr 8–17 Uhr" },
];

/** Hero: server-rendered content, animated by <HeroMotion>. */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      {/* desktop champagne panel + fine rings */}
      <div data-hero-panel aria-hidden="true" className="absolute top-0 right-0 hidden h-[calc(100%-60px)] w-[46.5%] bg-champagne lg:block" />
      <div data-hero-circles aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <span className="absolute -top-[220px] left-[68%] h-[700px] w-[700px] rounded-full border border-[#E6D6B0]" />
        <span className="absolute -top-[140px] left-[74%] h-[540px] w-[540px] rounded-full border border-[#EDE2C8]" />
      </div>

      <HeroMotion className="container-site relative grid items-center lg:min-h-[820px] lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] lg:gap-10 xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)] xl:gap-16">
        {/* copy */}
        {/* centred on phones/tablets, left-aligned next to the image on desktop */}
        <div className="pt-7 text-center md:pt-14 lg:py-20 lg:text-left">
          <div data-hero-fade="badge" className="flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
            <span className="inline-flex h-[30px] items-center gap-2 rounded-full border border-gold-border bg-gold-tint pr-3 pl-2.5 text-[12.5px] font-semibold text-gold-dark">
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-up-dot shadow-[0_0_0_3px_rgba(47,158,98,0.18)]" />
              Ankauf zum Tageskurs
            </span>
            <span className="hidden font-mono text-[11px] tracking-[0.22em] text-gold-ink md:inline">DEUTSCHLANDWEIT PER POST</span>
          </div>

          <h1
            id="hero-title"
            className="mt-5 mb-0 font-display text-[40px] leading-[0.98] font-normal tracking-[-0.025em] min-[400px]:text-[44px] md:mt-7 md:text-[68px] md:leading-[0.95] lg:text-[80px] xl:text-[94px] xl:leading-[0.93] xl:tracking-[-0.03em]"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">
                Gold Ankauf
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">
                zum fairen
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-hero-line className="block italic text-gold-deep">
                Tagespreis.
              </span>
            </span>
          </h1>

          <p data-hero-fade="text" className="mx-auto mt-5 mb-0 max-w-[520px] text-[15.5px] leading-[1.6] text-muted md:mt-6 md:text-[17.5px] lg:mx-0 lg:text-[18px] xl:mt-7 xl:text-[18.5px]">
            Altgold, Schmuck, Münzen, Barren und Zahngold – sowie Silber, Platin und Palladium. Bewertet nach Gewicht, Feingehalt und aktuellem Börsenkurs.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 md:mt-8 md:flex-row md:items-center md:justify-center md:gap-3.5 lg:justify-start xl:mt-10">
            <div data-hero-fade="cta">
              <Button href="#rechner" size="lg" arrow fullWidth className="md:w-auto">
                Jetzt Wert berechnen
              </Button>
            </div>
            <div data-hero-fade="cta">
              <Button href="#preise" variant="outline" size="lg" icon="chart" fullWidth className="!h-[52px] md:!h-[62px] md:w-auto">
                Aktuelle Preise ansehen
              </Button>
            </div>
          </div>

          <p data-hero-fade="meta" className="mt-3.5 mb-0 text-center text-[13.5px] text-soft md:mt-4 lg:text-left">
            Oder telefonisch beraten lassen:{" "}
            <a href={COMPANY.phoneHref} className="border-b border-gold font-semibold text-ink">
              {COMPANY.phoneShort}
            </a>
          </p>

          <ul className="m-0 mt-8 hidden list-none grid-cols-3 gap-5 border-t border-line p-0 pt-5 text-left md:grid xl:mt-10 xl:pt-6">
            {FACTS.map((f, i) => (
              <li key={f.title} data-hero-fade="meta" className={i > 0 ? "flex gap-3 border-l border-line pl-5" : "flex gap-3"}>
                <Icon name={f.icon} size={20} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold-deep" />
                <span className="flex flex-col gap-0.5">
                  <span className="text-[14.5px] font-semibold">{f.title}</span>
                  <span className="text-[12.5px] text-soft">{f.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* image composition */}
        <div className="relative -mx-5 mt-8 h-[440px] overflow-hidden bg-champagne md:-mx-10 md:mt-11 md:h-[500px] lg:mx-0 lg:mt-0 lg:h-[740px] lg:overflow-visible lg:bg-transparent">
          <span aria-hidden="true" className="absolute -top-[120px] left-[40%] h-[380px] w-[380px] rounded-full border border-[#E6D6B0] md:-top-[200px] md:left-[52%] md:h-[560px] md:w-[560px] lg:hidden" />

          <div className="absolute top-[34px] left-1/2 h-[370px] w-[266px] -translate-x-1/2 md:top-10 md:h-[420px] md:w-[330px] lg:top-[50px] lg:h-[640px] lg:w-[460px] xl:h-[676px] xl:w-[480px]">
            <div data-parallax="image" className="absolute inset-0">
              <div data-hero-image className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-[18px] shadow-[0_40px_80px_rgba(100,75,25,0.24)] lg:rounded-b-[22px]">
                <div data-hero-image-inner className="absolute inset-0">
                  <Image
                    src="/images/hero-goldschmuck.jpg"
                    alt="Goldschmuck, Ringe und Goldmünzen auf dunklem Holz"
                    fill
                    preload
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 1280px) 480px, (min-width: 1200px) 460px, (min-width: 768px) 330px, 266px"
                    className="object-cover object-[44%_50%]"
                  />
                </div>
              </div>
            </div>
            <span
              data-hero-fade="ring"
              aria-hidden="true"
              className="absolute -inset-3 rounded-t-full rounded-b-[24px] border border-gold opacity-55 lg:-inset-[18px] lg:rounded-b-[30px]"
            />
          </div>

          <div data-parallax="coin" className="absolute top-[296px] left-[14px] md:top-[300px] md:left-[170px] lg:top-auto lg:bottom-[40px] lg:-left-[40px] xl:-left-[70px]">
            <div
              data-hero-fade="coin"
              className="relative h-[118px] w-[118px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_24px_50px_rgba(100,75,25,0.26)] md:h-[170px] md:w-[170px] md:border-[7px] lg:h-[204px] lg:w-[204px] lg:border-8"
            >
              <Image src="/images/goldmuenzen.jpg" alt="Goldmünzen" fill sizes="204px" className="object-cover object-[30%_50%]" />
            </div>
          </div>

          <div data-parallax="card" className="absolute top-16 right-3 w-[176px] md:top-[70px] md:right-auto md:left-10 md:w-[236px] lg:top-[70px] lg:right-[-8px] lg:left-auto lg:w-[266px] xl:right-[-24px]">
            <div data-hero-fade="card">
              <div data-float>
                <div className="md:hidden">
                  <HeroPriceCard compact />
                </div>
                <div className="hidden md:block">
                  <HeroPriceCard />
                </div>
              </div>
            </div>
          </div>

          <div data-parallax="card" className="absolute top-[360px] right-[34px] hidden md:block lg:top-auto lg:right-[10px] lg:bottom-[110px]">
            <div data-hero-fade="card">
              <div data-float className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[13px] shadow-card">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-tint text-gold-ink">
                  <Icon name="package" size={18} strokeWidth={1.6} />
                </span>
                <span className="flex flex-col gap-px">
                  <span className="font-semibold">Kostenloses Versandpaket</span>
                  <span className="text-[11.5px] text-soft">versichert bis 2.500 €</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* mobile facts (below image) */}
        <ul className="m-0 mt-6 grid list-none grid-cols-3 gap-2.5 p-0 md:hidden">
          {FACTS.map((f, i) => (
            <li key={f.title} className={i > 0 ? "flex flex-col gap-1.5 border-l border-line pl-2.5" : "flex flex-col gap-1.5"}>
              <Icon name={f.icon} size={20} strokeWidth={1.6} className="text-gold-deep" />
              <span className="text-[13.5px] font-semibold">{f.title}</span>
              <span className="text-[12px] leading-[1.4] text-soft">{f.text}</span>
            </li>
          ))}
        </ul>
      </HeroMotion>

      <div className="mt-6 md:mt-8 lg:mt-0">
        <TickerRibbon />
      </div>
    </section>
  );
}
