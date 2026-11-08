import { PageArt } from "./Illustrations";
export function PageHero({ title, text, kind }: { title: string; text: string; kind: "services" | "projects" | "pricing" | "about" | "contact" }) {
  return (<section className="grid-bg border-b border-neutral-200"><div className="wrap grid items-center gap-8 py-14 md:grid-cols-2">
    <div data-anim><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1><p className="mt-4 max-w-xl text-mute">{text}</p></div>
    <div data-parallax="0.04"><PageArt kind={kind} /></div></div></section>);
}
