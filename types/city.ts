export interface CityFaq {
  question: string;
  answer: string;
}

/** One city landing page (/goldankauf-<slug>). All texts are written for that city only. */
export interface City {
  /** URL part after "goldankauf-" — umlauts without dots, like the old site (ö → o). */
  slug: string;
  name: string;
  /** <title> without the " | Cash 4 Gold" suffix. */
  metaTitle: string;
  metaDescription: string;
  /** Paragraph under the hero headline. */
  heroText: string;
  intro: {
    title: string;
    paragraphs: string[];
  };
  /** Districts of the city itself. */
  districts: string[];
  /** Towns nearby. */
  nearby: string[];
  faqs: CityFaq[];
}

export interface State {
  id: string;
  name: string;
  cities: City[];
}
