import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/visa`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/doorstep`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = COUNTRY_GUIDES.map((country) => ({
    url: `${SITE_URL}/visa/${country.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...countryRoutes];
}
