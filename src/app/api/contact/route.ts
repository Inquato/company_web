import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";
export const runtime = "nodejs";
const hits = new Map<string, number[]>(); // best-effort limiter; use Upstash/Vercel KV for strict limits
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now(); const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  hits.set(ip, [...recent, now]);
  let body: unknown; try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check the form." }, { status: 400 });
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true });
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, { method: "POST", headers: { apikey: SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ name: d.name, email: d.email, phone: d.phone, company: d.company, service: d.service, budget: d.budget, message: d.message }) }).catch(() => {});
  }
  const html = `<h2>New INQUATO inquiry</h2><p><b>Name:</b> ${esc(d.name)}<br><b>Email:</b> ${esc(d.email)}<br><b>Phone:</b> ${esc(d.phone)}<br><b>Company:</b> ${esc(d.company ?? "")}<br><b>Service:</b> ${esc(d.service)}<br><b>Budget:</b> ${esc(d.budget ?? "")}</p><p>${esc(d.message).replace(/\n/g, "<br>")}</p>`;
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: CONTACT_FROM_EMAIL, to: [CONTACT_TO_EMAIL], reply_to: d.email, subject: `New inquiry: ${d.service} (${d.name})`, html }) });
  if (!r.ok) return NextResponse.json({ error: "We couldn't send your message. Please try WhatsApp or email." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
