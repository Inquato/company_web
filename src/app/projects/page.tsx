import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next"; import { projects } from "@/data/projects"; import { ProjectGrid } from "@/components/ProjectGrid"; import { Cta } from "@/components/Cta";
export const metadata: Metadata = { title: "Projects", description: "INQUATO concept and demonstration projects." };
export default function Projects() { return (<><PageHero kind="projects" title="Projects" text="Every project here is an INQUATO concept or demonstration, clearly labelled. None is presented as client work." /><section className="wrap py-14"><div className="mt-10"><ProjectGrid projects={projects} /></div></section><Cta /></>); }
