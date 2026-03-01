# North Star Family Counseling — Site Context

> **Site Key:** northstarfamilycounseling
> **Domain:** northstarfamilycounseling.com
> **Blueprint:** leadgen
> **Owner:** Nate Webman (for Megan Corrieri)

## About This Site

This is the lead generation website for **North Star Specialty Counseling & Therapy**, a therapy practice in Frisco, Texas founded by Megan Corrieri. The site is built on the Website Factory architecture.

**For the full system architecture, see:** `github.com/natewebman/website-factory/CLAUDE.md`

## Key Details

- **Business:** Therapy practice serving Frisco, TX and surrounding areas
- **Founder:** Megan Corrieri, Clinical Therapist
- **Licensed States:** Texas and Minnesota
- **Services:** Postpartum depression therapy, stress management/burnout recovery, family communication counseling, general therapy
- **Service Areas:** Frisco, Prosper, Little Elm, McKinney, Allen, Plano, The Colony, Celina
- **Booking:** All CTAs link to `https://northstarfrisco.com/?utm_campaign=nscounselingandtherapy`
- **Tone:** Warm, authoritative, clinical but approachable, empathetic

## Brand

- **Colors:** Navy (#1a3a52), Cream (#f5f1e8), Slate (#6b7280)
- **Fonts:** Playfair Display (headings), DM Sans (body)
- **Logo:** Compass icon + "North Star" wordmark

## Content Rules

Per Website Factory rules:
- Service pages are **money pages** — `locked = true`, `optimization_mode = suggest_only`
- Blog articles have more flexibility — `optimization_mode = meta_only`
- Published content is **immutable** — the automated system never edits live content

## Content Expansion Plan

1. **More service pages:** Anxiety therapy, depression counseling, couples therapy, teen therapy, EMDR, etc.
2. **Blog articles:** Mental health topics, Frisco-specific content, parenting resources, stress tips
3. **Geo pages:** Therapy in Prosper TX, therapy in Little Elm TX, therapy in McKinney TX, etc.

## Tech Stack

- **Framework:** Astro (SSG)
- **Styling:** Tailwind CSS
- **Database:** Supabase (multi-tenant via Website Factory)
- **Hosting:** Cloudflare Pages
- **Repo:** github.com/natewebman/northstarfamilycounseling
