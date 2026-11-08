"use client";
import { useState } from "react"; import type { Project } from "@/types"; import { ProjectCard } from "./ProjectCard";
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]; const [c, setC] = useState("All");
  return (<><div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">{cats.map((x) => <button key={x} aria-pressed={c === x} onClick={() => setC(x)} className={`rounded-full border px-4 py-2 text-sm ${c === x ? "border-brand bg-brand text-white" : "border-neutral-300 hover:border-brand"}`}>{x}</button>)}</div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.filter((p) => c === "All" || p.category === c).map((p) => <ProjectCard key={p.slug} p={p} />)}</div></>);
}
