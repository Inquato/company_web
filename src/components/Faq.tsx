"use client";
import { useState } from "react"; import { Plus } from "lucide-react";
export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="divide-y divide-neutral-200 border-y border-neutral-200">{items.map(([q, a], i) => (<div key={q}>
    <h3><button className="flex w-full items-center justify-between py-5 text-left font-medium" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>{q}<Plus className={`h-5 w-5 shrink-0 text-brand transition ${open === i ? "rotate-45" : ""}`} /></button></h3>
    <div id={`faq-${i}`} hidden={open !== i} className="pb-5 text-mute">{a}</div></div>))}</div>;
}
