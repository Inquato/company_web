export const site = {
  name: "INQUATO", tagline: "Digital Solutions for Growing Businesses.",
  description: "INQUATO builds modern websites, web applications, business software and automation for growing businesses in Sri Lanka and worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[EMAIL PLACEHOLDER]",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  phone: "[PHONE PLACEHOLDER]", address: "[ADDRESS PLACEHOLDER]",
  socials: [{ label: "LinkedIn", href: "#" }, { label: "Facebook", href: "#" }, { label: "Instagram", href: "#" }],
  nav: [{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/projects", label: "Projects" }, { href: "/pricing", label: "Pricing" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }],
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "Vercel"],
  faqs: [
    ["How long does a website take?", "It depends on scope. After a short discovery call we give you a realistic timeline in writing."],
    ["Do I pay for hosting and domain separately?", "Yes, where applicable. Domain and hosting are billed by their providers and are not included in project prices."],
    ["Can you work with businesses outside Sri Lanka?", "Yes. We work remotely with clients in Sri Lanka and internationally."],
    ["Will I be able to update my website?", "Yes. We can build it so you can edit key content yourself, and we'll show you how."],
    ["How do I get a quotation?", "Send us a short project inquiry. We reply with questions or a quotation based on your needs."]
  ] as [string, string][],
  process: [["Discover", "We learn your business, goals and customers."], ["Plan", "We agree scope, timeline and cost in writing."], ["Design", "You review layouts before we build."], ["Build", "We develop, test and refine on real devices."], ["Launch & support", "We deploy, train your team and stay available."]] as [string, string][],
  why: [["Business first", "We start from what you want to achieve, then choose the technology."], ["Plain communication", "No jargon. You always know what is happening and what it costs."], ["Built to grow", "Clean, maintainable code so your system can expand with you."], ["Fast and reliable", "Modern serverless hosting that stays quick and secure."]] as [string, string][],
};
