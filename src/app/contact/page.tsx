import type { Metadata } from "next"; import { PageArt } from "@/components/Illustrations"; import { site } from "@/config/site"; import { ContactForm } from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact", description: "Tell INQUATO about your project and request a quotation." };
export default function Contact({ searchParams }: { searchParams: { service?: string } }) { return (<section className="wrap grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
  <div><h1 className="text-4xl font-semibold tracking-tight">Start your project</h1><p className="mb-8 mt-3 text-mute">Share a few details and we&apos;ll get back to you.</p><ContactForm defaultService={searchParams.service} /></div>
  <aside className="space-y-6"><div data-anim><PageArt kind="contact" /></div><div className="card h-fit text-sm"><h2 className="font-semibold">Contact details</h2><p className="mt-3 text-mute">{site.email}<br />{site.phone}<br />{site.address}</p>
    <a className="btn-p mt-5 w-full" href={site.whatsapp ? `https://wa.me/${site.whatsapp}` : "/contact"} rel="noopener noreferrer">Chat on WhatsApp</a>
    <p className="mt-5 flex gap-4">{site.socials.map((s) => <a key={s.label} href={s.href} className="text-brand">{s.label}</a>)}</p></div></aside></section>); }
