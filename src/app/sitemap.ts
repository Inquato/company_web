import type { MetadataRoute } from "next"; import { site } from "@/config/site"; import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap { return [...site.nav.map((n) => n.href), ...projects.map((p) => `/projects/${p.slug}`)].map((u) => ({ url: site.url + (u === "/" ? "" : u), lastModified: new Date() })); }
