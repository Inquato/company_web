# INQUATO website
Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · serverless on Vercel.
## Setup
1. `npm install`  2. `cp .env.example .env.local` and fill values  3. `npm run dev`  4. Check: `npm run lint && npm run build`
## Edit content
`src/config/site.ts` (company, nav, FAQ, process), `src/data/*` (services, projects, packages). Replace every `[PLACEHOLDER]`.
## Supabase (optional)
```sql
create table inquiries (id uuid primary key default gen_random_uuid(), created_at timestamptz default now(), name text, email text, phone text, company text, service text, budget text, message text);
alter table inquiries enable row level security; -- no policies: only the server service-role key can write
```
## Deploy to Vercel
Push to GitHub → Import in Vercel → add the env vars from `.env.example` → Deploy. Verify your sending domain in Resend.
