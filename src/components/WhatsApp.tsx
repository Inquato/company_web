import { MessageCircle } from "lucide-react"; import { site } from "@/config/site";
export function WhatsApp() {
  const href = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "/contact";
  return <a href={href} target={site.whatsapp ? "_blank" : undefined} rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:scale-105"><MessageCircle /></a>;
}
