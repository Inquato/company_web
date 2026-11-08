import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next"; import { ServiceIcon } from "@/components/ServiceCard"; import Link from "next/link"; import { services } from "@/data/services"; import { Cta } from "@/components/Cta";
export const metadata: Metadata = { title: "Services", description: "Websites, e-commerce, web apps, business systems, ERP, AI automation and custom software from INQUATO." };
export default function Services() {
  const ld = { "@context": "https://schema.org", "@graph": services.map((s) => ({ "@type": "Service", name: s.title, description: s.summary, provider: { "@type": "Organization", name: "INQUATO" } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <PageHero kind="services" title="Services" text="Practical digital solutions, from a first website to full business systems." />
    <div className="wrap space-y-6 pb-24">{services.map((s) => (<section key={s.slug} id={s.slug} className="card grid scroll-mt-24 gap-6 md:grid-cols-2">
      <div><ServiceIcon slug={s.slug} /><h2 className="mt-4 text-2xl font-semibold">{s.title}</h2><p className="mt-3 text-mute">{s.summary}</p><Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-p mt-6">Request a quotation</Link></div>
      <div className="grid gap-5 text-sm sm:grid-cols-2"><div><h3 className="font-semibold">Business benefits</h3><ul className="mt-2 list-disc pl-4 text-mute">{s.benefits.map((b) => <li key={b}>{b}</li>)}</ul></div>
        <div><h3 className="font-semibold">Features</h3><ul className="mt-2 list-disc pl-4 text-mute">{s.features.map((b) => <li key={b}>{b}</li>)}</ul></div>
        <div className="sm:col-span-2"><h3 className="font-semibold">Technologies</h3><p className="mt-2 text-mute">{s.tech.join(", ")}</p></div></div></section>))}</div><Cta /></>);
}
