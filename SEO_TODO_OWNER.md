# SEO — things only the owner can do

## ⚠️ Before deploying: fix the primary domain
Right now `theflauxmedia.in` redirects (308) to `www.theflauxmedia.in` (Vercel → Project → Domains).
The site's canonicals point at **`https://theflauxmedia.in`** (no www), as the SEO brief asked.
In Vercel → Domains: make `theflauxmedia.in` the primary domain and set `www.theflauxmedia.in` to redirect to it.
(We did **not** add a www→apex rule in `vercel.json` — combined with the current setting it would loop.)
If you'd rather keep `www` as primary, change `SITE_URL` in `client/src/lib/site.ts` instead.

`theflauxmedia-in.vercel.app` is publicly reachable; `vercel.json` now sends `X-Robots-Tag: noindex` for that host.

## Content TODOs in code (search for `TODO(owner)`)
- `client/src/lib/site.ts` — switch email to `hello@theflauxmedia.in` once it exists; add street address + postal code **only** if clients can visit a staffed studio.
- `client/src/seo/schema.ts` — add Google Business Profile, LinkedIn and Clutch URLs to `sameAs`.
- `client/src/content/packages.ts` — "starting from ₹…" prices for Flaux Lite / Surge / Velocity / One.
- `client/src/content/blog.ts` — real price ranges in the social media cost guide.
- `client/src/content/cases.ts` — real results per case study (reach, views, walk-ins…) **only with client permission**; the Results section stays hidden while empty.
- `client/src/content/services.ts` / `pages/service-detail.tsx` — confirmed turnaround times per service.
- `client/src/pages/about.tsx` — founder photo and a real bio for Amaan Saify.
- `client/src/components/testimonials.tsx` — real client quotes (section hidden until added).
- `/team` redirects to `/about` until real names and roles are provided.

## Off-site tasks
1. **Google Search Console** (domain property): submit `https://theflauxmedia.in/sitemap.xml`; request indexing for `/`, `/services`, `/our-work`, `/restaurant-marketing-bangalore`.
2. **Google Business Profile**: decide address vs service-area business (show the address only for a staffed studio). Primary category "Marketing agency" or "Social media agency"; add services and service areas (Bannerghatta Road, Gottigere, JP Nagar, Jayanagar, BTM Layout, Banashankari…); post real photos/videos weekly.
3. **Reviews**: ask past clients (Stories outlets, Madhuram, Macaw, Moai, Global Computers) via the GBP review link — aim for 4–6 a month. No incentives, never fake reviews.
4. **Listings** with identical name, phone and website: Justdial, Sulekha, IndiaMART, Bing Places, Apple Business Connect, Clutch, GoodFirms, Behance, LinkedIn.
5. Ask client websites you've built to add a "Designed by The Flaux Media" footer link.

## Not yet done in code (SEO brief phases 5–6)
- Re-encode creatives to WebP (≤250 KB at 1080px + 540px `srcset`) with descriptive filenames; slugs already exist in `client/src/data/works.json`.
- Lighthouse (mobile) on `/`, `/our-work` and one service page; fix flagged issues.
- Final verification pass and PR summary. Re-run checks any time with `npm run build && npm run check:seo`.
