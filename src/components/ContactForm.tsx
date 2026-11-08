"use client";
import { useState } from "react"; import { Loader2 } from "lucide-react"; import { inquirySchema } from "@/lib/validation"; import { services } from "@/data/services";
const budgets = ["Not sure yet", "Under LKR 100,000", "LKR 100,000 – 300,000", "LKR 300,000 – 750,000", "LKR 750,000+"];
const field = "mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:border-brand";
function L({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return <div><label htmlFor={id} className="text-sm font-medium">{label}</label>{children}{error && <p className="mt-1 text-xs text-red-600">{error}</p>}</div>;
}
export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle"); const [errs, setErrs] = useState<Record<string, string>>({}); const [msg, setMsg] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget)); const p = inquirySchema.safeParse(data);
    if (!p.success) { const f: Record<string, string> = {}; p.error.issues.forEach((i) => { f[String(i.path[0])] ||= i.message; }); setErrs(f); return; }
    setErrs({}); setState("loading");
    try { const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p.data) }); const j = await r.json();
      if (!r.ok) throw new Error(j.error); setState("ok"); } catch (x) { setMsg(x instanceof Error ? x.message : "Something went wrong."); setState("err"); }
  }
  if (state === "ok") return <div role="status" className="card border-brand"><h3 className="font-semibold">Thank you. Your inquiry has been sent.</h3><p className="mt-2 text-mute">We&apos;ll reply by email or WhatsApp soon.</p></div>;
  return (<form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
    <L id="name" label="Full name" error={errs.name}><input id="name" name="name" autoComplete="name" className={field} /></L>
    <L id="email" label="Email" error={errs.email}><input id="email" name="email" type="email" autoComplete="email" className={field} /></L>
    <L id="phone" label="Phone / WhatsApp" error={errs.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} /></L>
    <L id="company" label="Company name (optional)"><input id="company" name="company" autoComplete="organization" className={field} /></L>
    <L id="service" label="Required service" error={errs.service}><select id="service" name="service" defaultValue={defaultService} className={field}><option value="">Select a service</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}<option>Not sure yet</option></select></L>
    <L id="budget" label="Estimated budget (optional)"><select id="budget" name="budget" className={field}>{budgets.map((b) => <option key={b}>{b}</option>)}</select></L>
    <div className="sm:col-span-2"><L id="message" label="Project description" error={errs.message}><textarea id="message" name="message" rows={5} className={field} /></L></div>
    <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
    <div className="sm:col-span-2"><button disabled={state === "loading"} className="btn-p disabled:opacity-60">{state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}{state === "loading" ? "Sending" : "Send inquiry"}</button>
      {state === "err" && <p role="alert" className="mt-3 text-sm text-red-600">{msg}</p>}</div></form>);
}
