import type { MetadataRoute } from "next";
import { COMPANY } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${COMPANY.siteUrl}/sitemap.xml`,
  };
}
