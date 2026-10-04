import type { MetadataRoute } from "next";
import { COMPANY } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${COMPANY.siteUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${COMPANY.siteUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${COMPANY.siteUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${COMPANY.siteUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
