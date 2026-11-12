import type { MetadataRoute } from "next";
import { contact } from "@/content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${contact.url}/sitemap.xml`,
  };
}
