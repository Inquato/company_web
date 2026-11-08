import Link from "next/link"; import { Logo } from "./Logo"; import { site } from "@/config/site";
export function Footer() {
  return (<footer className="glow bg-ink text-white"><div className="wrap grid gap-10 py-14 md:grid-cols-3">
    <div><Logo light /><p className="mt-3 max-w-xs text-sm text-neutral-400">{site.tagline}</p></div>
    <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-2 text-sm text-neutral-300">{site.nav.map((n) => <li key={n.href}><Link className="hover:text-brand" href={n.href}>{n.label}</Link></li>)}</ul></nav>
    <div className="text-sm text-neutral-300"><p>{site.email}</p><p>{site.phone}</p><p>{site.address}</p>
      <p className="mt-3 flex gap-4">{site.socials.map((s) => <a key={s.label} href={s.href} className="hover:text-brand">{s.label}</a>)}</p></div>
  </div><p className="border-t border-white/10 py-5 text-center text-xs text-neutral-500">© {new Date().getFullYear()} INQUATO. All rights reserved.</p></footer>);
}
