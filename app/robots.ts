import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/estimator"],
      },
    ],
    sitemap: "https://www.amahhtechnology.com/sitemap.xml",
  };
}
