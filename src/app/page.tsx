import { Target, MessagesSquare, TrendingUp, Zap } from "lucide-react";
const whyIcons = [Target, MessagesSquare, TrendingUp, Zap];
import Link from "next/link"; import { site } from "@/config/site"; import { services } from "@/data/services"; import { projects } from "@/data/projects";
import { HeroArt } from "@/components/HeroArt"; import { ServiceCard } from "@/components/ServiceCard"; import { ProjectCard } from "@/components/ProjectCard"; import { Faq } from "@/components/Faq"; import { Cta } from "@/components/Cta";
export default function Home() {
  return (<>
    <div className="grid-bg"><section className="wrap grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
      <div><p className="text-sm font-semibold text-brand">INQUATO · {site.tagline}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">We Build Digital Experiences That Move Businesses Forward.</h1>
        <p className="mt-6 max-w-lg text-lg text-mute">Modern websites, web applications, business software and automation, built for small businesses, startups and growing companies.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="btn-p">Start Your Project</Link><Link href="/projects" className="btn-s">Explore Our Work</Link></div></div>
      <div data-parallax="0.05"><HeroArt /></div></section></div>
    <section className="border-y border-neutral-200 bg-neutral-50"><div className="wrap sec"><div><h2 className="h2 max-w-2xl">Technology that works as hard as you do.</h2>
      <p className="mt-5 max-w-2xl text-mute">INQUATO is a Sri Lankan digital solutions company. We help businesses get online, work more efficiently and grow with software built around their goals, not around templates.</p></div></div></section>
    <section className="wrap sec"><h2 className="h2">What we build</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div></section>
    <section className="glow bg-ink text-white"><div className="wrap sec"><div className="flex items-end justify-between"><h2 className="h2">Featured concept work</h2><Link href="/projects" className="text-sm text-brand">All projects</Link></div>
      <p className="mt-3 max-w-xl text-neutral-400">These are INQUATO concept and demonstration projects, not client work.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&_.card]:border-white/10 [&_.card]:bg-white/5 [&_p]:text-neutral-400">{projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} p={p} />)}</div></div></section>
    <section className="wrap sec"><h2 className="h2">Why choose INQUATO</h2><div className="mt-10 grid gap-4 sm:grid-cols-2">{site.why.map(([t, d], i) => { const I = whyIcons[i]; return <div key={t} className="card"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><I className="h-5 w-5" /></span><h3 className="mt-4 font-semibold">{t}</h3><p className="mt-2 text-mute">{d}</p></div>; })}</div></section>
    <section className="border-y border-neutral-200 bg-neutral-50"><div className="wrap sec"><h2 className="h2">How we work</h2><ol className="mt-10 grid gap-4 md:grid-cols-5">{site.process.map(([t, d], i) => <li key={t} className="card"><span className="text-sm font-semibold text-brand">Step {i + 1}</span><h3 className="mt-1 font-semibold">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></li>)}</ol></div></section>
    <section className="wrap sec"><h2 className="h2">Our technology stack</h2><ul className="mt-8 flex flex-wrap gap-3">{site.stack.map((t) => <li key={t} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{t}</li>)}</ul></section>
    <section className="wrap pb-20"><h2 className="h2">Client testimonials</h2><p className="card mt-8 text-mute">[TESTIMONIALS PLACEHOLDER] Real client feedback will appear here once available.</p></section>
    <section className="wrap pb-20 sm:pb-28"><h2 className="h2 mb-8">Frequently asked questions</h2><Faq items={site.faqs} /></section>
    <Cta /></>);
}
