import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import type { City } from "@/types/city";

function PlaceList({ title, places }: { title: string; places: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="m-0 font-mono text-[10px] font-normal tracking-[0.2em] text-gold-ink uppercase md:text-[10.5px]">{title}</h3>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {places.map((place) => (
          <li key={place} className="rounded-full border border-line bg-white px-3 py-1.5 text-[13.5px] text-body">
            {place}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** City landing pages only: copy written for this city, its districts and nearby towns. */
export function CityIntro({ city, stateName }: { city: City; stateName: string }) {
  return (
    <section id="stadt" aria-labelledby="stadt-title" className="section-y bg-white">
      <div className="container-site grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-20">
        <Reveal stagger={0.06} className="flex flex-col gap-4 md:gap-5">
          <nav data-reveal aria-label="Brotkrumen" className="text-center text-[12.5px] text-soft lg:text-left">
            <Link href="/" className="hover:text-gold-ink">
              Startseite
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{stateName}</span>
            <span aria-hidden="true"> / </span>
            <span aria-current="page" className="text-ink">
              {city.name}
            </span>
          </nav>
          <div data-reveal>
            <Eyebrow number="01" label={`Goldankauf ${city.name}`} />
          </div>
          <div data-reveal>
            <SectionTitle id="stadt-title">{city.intro.title}</SectionTitle>
          </div>
          <div data-reveal className="mx-auto flex max-w-[640px] flex-col gap-4 text-center text-[15.5px] leading-[1.7] text-muted md:text-[16.5px] lg:mx-0 lg:text-left">
            {city.intro.paragraphs.map((p) => (
              <p key={p} className="m-0">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal y={20} className="flex flex-col gap-6 rounded-[22px] border border-line bg-cream p-5 md:p-7">
          <PlaceList title={`Stadtteile in ${city.name}`} places={city.districts} />
          <PlaceList title="Auch für die Umgebung" places={city.nearby} />
          <p className="m-0 border-t border-line pt-5 text-[13.5px] leading-[1.55] text-soft">
            Ankauf ausschließlich per Versand – kein Ladengeschäft vor Ort. Kostenloses Versandpaket, versichert bis 2.500 €.
          </p>
          <Button href="#rechner" size="md" arrow fullWidth>
            Jetzt Wert berechnen
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
