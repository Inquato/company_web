import Link from "next/link"; import { ArrowUpRight, Globe, ShoppingCart, LayoutDashboard, ClipboardList, Boxes, Bot, Code2, type LucideIcon } from "lucide-react"; import type { Service } from "@/types";
const icons: Record<string, LucideIcon> = { "business-website": Globe, ecommerce: ShoppingCart, "web-applications": LayoutDashboard, "management-systems": ClipboardList, erp: Boxes, "ai-automation": Bot, "custom-software": Code2 };
export function ServiceIcon({ slug }: { slug: string }) { const I = icons[slug] ?? Globe; return <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><I className="h-5 w-5" /></span>; }
export function ServiceCard({ s }: { s: Service }) {
  return <Link href={`/services#${s.slug}`} className="card group block transition hover:border-brand hover:shadow-lg hover:shadow-brand/10"><div className="flex justify-between"><ServiceIcon slug={s.slug} /><ArrowUpRight className="h-5 w-5 text-mute transition group-hover:text-brand" /></div><h3 className="mt-4 font-semibold">{s.title}</h3><p className="mt-2 text-sm text-mute">{s.summary}</p></Link>;
}
