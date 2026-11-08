import type { Metadata } from "next"; import { notFound } from "next/navigation"; import { MockShot } from "@/components/Illustrations"; import Link from "next/link"; import { projects } from "@/data/projects"; import { Cta } from "@/components/Cta";
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const p = projects.find((x) => x.slug === params.slug); return p ? { title: p.title, description: p.summary } : {}; }
export default function Project({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug); if (!p) notFound();
  return (<><article className="wrap py-16"><Link href="/projects" className="text-sm text-brand">Back to projects</Link>
    <span className="mt-6 block w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">{p.kind}: not a client project</span>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight">{p.title}</h1><p className="mt-4 max-w-2xl text-mute">{p.description}</p>
    <div className="mt-8 aspect-[16/8] overflow-hidden rounded-2xl border border-neutral-200"><MockShot /></div>
    <div className="mt-10 grid gap-8 sm:grid-cols-2"><div><h2 className="font-semibold">Features</h2><ul className="mt-2 list-disc pl-5 text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></div><div><h2 className="font-semibold">Technologies</h2><p className="mt-2 text-mute">{p.tech.join(", ")}</p></div></div>
    {p.demoUrl ? <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-p mt-8">View live demo</a> : <p className="mt-8 text-sm text-mute">[LIVE DEMO LINK PLACEHOLDER]</p>}</article><Cta /></>);
}
