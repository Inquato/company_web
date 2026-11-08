import Link from "next/link"; import { MockShot } from "./Illustrations"; import type { Project } from "@/types";
export function ProjectCard({ p }: { p: Project }) {
  return <Link href={`/projects/${p.slug}`} className="card group block transition hover:border-brand">
    <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl"><MockShot /></div>
    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">{p.kind}</span>
    <h3 className="mt-3 font-semibold">{p.title}</h3><p className="mt-1 text-sm text-mute">{p.summary}</p></Link>;
}
