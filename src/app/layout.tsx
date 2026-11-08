import type { Metadata } from "next"; import { Inter } from "next/font/google"; import "./globals.css";
import { Header } from "@/components/Header"; import { Footer } from "@/components/Footer"; import { WhatsApp } from "@/components/WhatsApp"; import { ScrollFx } from "@/components/ScrollFx"; import { site } from "@/config/site";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` }, description: site.description,
  openGraph: { title: site.name, description: site.description, siteName: site.name, type: "website" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, description: site.description };
  return (<html lang="en" className={inter.variable} suppressHydrationWarning><body className="font-sans" suppressHydrationWarning>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:p-3">Skip to content</a>
    <Header /><main id="main">{children}</main><Footer /><WhatsApp /><ScrollFx /></body></html>);
}
