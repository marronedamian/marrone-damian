import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://damianmarrone.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/drafts"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
