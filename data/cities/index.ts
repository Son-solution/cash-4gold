import type { City, State } from "@/types/city";
import { BADEN_WUERTTEMBERG } from "./baden-wuerttemberg";
import { BAYERN } from "./bayern";
import { BERLIN } from "./berlin";
import { BRANDENBURG } from "./brandenburg";
import { BREMEN } from "./bremen";
import { HAMBURG } from "./hamburg";
import { HESSEN } from "./hessen";
import { MECKLENBURG_VORPOMMERN } from "./mecklenburg-vorpommern";
import { NIEDERSACHSEN } from "./niedersachsen";
import { NORDRHEIN_WESTFALEN } from "./nordrhein-westfalen";

/**
 * All states shown under "Städte" in the footer, in display order.
 * New state: add a file next to this one and list it here — pages, footer and sitemap follow automatically.
 */
export const STATES: State[] = [BADEN_WUERTTEMBERG, BAYERN, BERLIN, BRANDENBURG, BREMEN, HAMBURG, HESSEN, MECKLENBURG_VORPOMMERN, NIEDERSACHSEN, NORDRHEIN_WESTFALEN];

export const CITY_PREFIX = "goldankauf-";

export function cityPath(city: City) {
  return `/${CITY_PREFIX}${city.slug}`;
}

export function allCities() {
  return STATES.flatMap((state) => state.cities.map((city) => ({ city, state })));
}

/** Looks up a city by its full URL segment, e.g. "goldankauf-stuttgart". */
export function findCity(segment: string) {
  if (!segment.startsWith(CITY_PREFIX)) return undefined;
  const slug = segment.slice(CITY_PREFIX.length);
  return allCities().find(({ city }) => city.slug === slug);
}
