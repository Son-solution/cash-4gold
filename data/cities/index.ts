import type { City, State } from "@/types/city";
import { BADEN_WUERTTEMBERG } from "./baden-wuerttemberg";

/**
 * All states shown under "Städte" in the footer, in display order.
 * New state: add a file next to this one and list it here — pages, footer and sitemap follow automatically.
 */
export const STATES: State[] = [BADEN_WUERTTEMBERG];

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
