import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://damianmarrone.com";
  const now = new Date().toISOString();

  const routes = [
    {
      url: base + "/",
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: base + "/#proyectos",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: base + "/#experiencia",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: base + "/#skills",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    /*{
      url: base + "/#contacto",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },*/
    // Agrega /en y secciones si tienes versión en inglés
  ];

  return routes;
}
