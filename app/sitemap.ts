import type { MetadataRoute } from "next";
import { allCities, cityPath } from "@/data/cities";
import { COMPANY } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${COMPANY.siteUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    ...allCities().map(({ city }) => ({
      url: `${COMPANY.siteUrl}${cityPath(city)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { url: `${COMPANY.siteUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${COMPANY.siteUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${COMPANY.siteUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
