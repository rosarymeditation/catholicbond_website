import type { MetadataRoute } from "next";
import { countries } from "@/lib/countries";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.catholicbond.com";
  const now = new Date();

  const countryPages = countries.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    // Legacy explicit pages
    { url: `${base}/catholic-dating-nigeria`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/catholic-singles-uk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...countryPages,
    ...blogPosts,
  ];
}
