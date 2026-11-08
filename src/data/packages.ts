import type { Package } from "@/types";
// Prices intentionally not set. Edit priceLabel when ready.
export const packages: Package[] = [
  { name: "Basic", tagline: "For a simple, professional online presence.", priceLabel: "[PRICE PLACEHOLDER]", features: ["Up to 5 pages", "Mobile-friendly design", "Contact form", "Basic SEO setup"] },
  { name: "Standard", tagline: "For businesses ready to grow online.", priceLabel: "[PRICE PLACEHOLDER]", features: ["Up to 10 pages", "Custom design", "Content management", "Analytics setup"], highlight: true },
  { name: "Premium", tagline: "For feature-rich, high-impact websites.", priceLabel: "[PRICE PLACEHOLDER]", features: ["Unlimited pages", "Advanced features", "Integrations", "Priority support"] },
  { name: "Custom", tagline: "For web apps, systems and automation.", priceLabel: "Request a quotation", features: ["Scoped to your needs", "Discovery workshop", "Phased delivery", "Ongoing support"] },
];
