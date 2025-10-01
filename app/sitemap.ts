// app/sitemap.ts
import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kratosintelligence.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/pricing", "/contact", "/content/knowledge-base"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
