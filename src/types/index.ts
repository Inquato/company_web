export type Service = { slug: string; title: string; summary: string; benefits: string[]; features: string[]; tech: string[] };
export type Project = { slug: string; title: string; category: string; kind: "Concept project" | "Demonstration project"; summary: string; description: string; tech: string[]; features: string[]; demoUrl?: string; image?: string };
export type Package = { name: string; tagline: string; priceLabel: string; features: string[]; highlight?: boolean };
