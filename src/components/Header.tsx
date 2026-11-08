"use client";
import Link from "next/link"; import { usePathname } from "next/navigation"; import { useState } from "react"; import { Menu, X } from "lucide-react"; import { Logo } from "./Logo"; import { site } from "@/config/site";
export function Header() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return (<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
    <div className="wrap flex h-16 items-center justify-between">
      <Link href="/" aria-label="INQUATO home"><Logo /></Link>
      <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
        {site.nav.map((n) => <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className={`text-sm font-medium hover:text-brand ${path === n.href ? "text-brand" : "text-mute"}`}>{n.label}</Link>)}
        <Link href="/contact" className="btn-p !py-2">Start your project</Link>
      </nav>
      <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav aria-label="Mobile" className="wrap flex flex-col gap-1 border-t border-neutral-200 pb-4 md:hidden">
      {site.nav.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium">{n.label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)} className="btn-p mt-2">Start your project</Link></nav>}
  </header>);
}
