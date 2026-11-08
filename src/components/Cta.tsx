import Link from "next/link";
export function Cta({ title = "Ready to build something that moves your business forward?", text = "Tell us what you need. We'll reply with next steps and a clear quotation." }) {
  return <section className="glow bg-ink text-white"><div className="wrap sec text-center"><h2 className="h2 mx-auto max-w-2xl">{title}</h2><p className="mx-auto mt-4 max-w-xl text-neutral-400">{text}</p><Link href="/contact" className="btn-p mt-8">Request a quotation</Link></div></section>;
}
