# Elementor Build Guide — ARVEN Homepage

## Global design system
- Maximum content width: 1520px
- Desktop horizontal gutter: 26px minimum
- Tablet gutter: 20px
- Mobile gutter: 14px
- Display font: Anton
- Body font: Manrope
- Utility/meta font: DM Mono
- Dark green: #073E2D
- Warm cream: #F3D7AA
- Signal orange: #FF5126
- Warm paper: #FFF7EA
- Primary card radius: 32px desktop / 22px mobile
- Secondary radius: 18–24px desktop / 14–18px mobile
- Minimum interactive target: 44px

## Visual rules
ARVEN should feel like one continuous editorial finance brand, not a collection of unrelated widgets. Use oversized condensed display typography, generous whitespace, rounded cards and rounded image surfaces, restrained orange accents, and strong green/cream contrast. Stickers are emphasis devices and should be limited to one meaningful accent per major composition.

Avoid generic SaaS card grids, excessive pills, small headings, random border-radius values, decorative gradients, or finance imagery that feels like retail banking/crypto. Photography should show founders, leadership teams, advisors, planning and decision-making.

## Homepage mapping
1. Hero — full-viewport image composition, ARVEN wordmark, headline and advisor CTA
2. Finance, With Direction — oversized value proposition with MARGIN / RUNWAY / FORECAST accents
3. Growth Gets Expensive — left problem statement + two large proof cards
4. What Founders Say — full-screen stacked testimonial carousel
5. Services — four rounded service panels: Fractional CFO; Cash Flow & Runway; Forecasting & FP&A; Fundraising & Board
6. Selected Work — editorial case study composition with growth metrics
7. Brand Statement — full-screen typographic transition
8. How It Works — four decision-oriented stages: Diagnose, Build, Partner, Evolve
9. Perspective — advisor portrait + finance-before-the-decision point of view
10. The Finance Brief — educational founder finance content
11. Contact CTA — strong advisory conversion prompt + oversized ARVEN wordmark
12. Footer — company positioning, navigation and contact information

## Elementor implementation
Use Containers/Flexbox and native Elementor controls wherever possible. Create global typography, color and radius tokens first. Reuse a small set of component classes for rounded panels, utility labels, CTAs and reveal motion. Keep DOM structure shallow so buyers can edit the kit without understanding custom code.

The testimonial carousel should use an Elementor-compatible slider/carousel implementation in the production kit. Preserve the visual stacked-card treatment, keyboard controls, clear previous/next labels and reduced-motion behavior.

## Responsive rules
- Desktop: preserve the large editorial scale and full/tall viewport rhythm.
- Tablet: reduce multi-column layouts before reducing readability; service cards stack to one column where needed.
- Mobile: use one-column reading order, 14px page gutters, 22px primary card radius, and no horizontal overflow.
- Do not use viewport typography below a readable body minimum; body copy should remain approximately 15–18px.
- Maintain at least 44px touch targets for navigation, carousel arrows and primary CTAs.
- Stickers must never cover essential copy on tablet/mobile.
- Disable or simplify non-essential transforms for `prefers-reduced-motion`.

## Content rules for this niche
The buyer should be able to adapt ARVEN to a Fractional CFO, outsourced CFO, finance consultancy, FP&A advisory or founder finance practice. Keep the language centered on cash visibility, runway, margins, pricing, hiring, forecasts, fundraising, board reporting and decision support. Avoid promises of investment returns, guaranteed fundraising, tax/legal advice, or fabricated regulatory credentials.

## ThemeForest / Envato production checklist
- Replace prototype-only remote imagery with properly licensed/distributable assets or documented placeholders.
- Replace all fictional company names, testimonials, metrics and contact details before a real client launch.
- Package only fonts/assets whose licenses permit template distribution.
- Verify exported templates import without missing global styles or widgets.
- Test current Elementor and WordPress versions before submission.
- Check desktop/tablet/mobile for overflow, clipping, sticky/fixed conflicts and touch-target size.
- Provide documentation for global styles, image replacement, carousel editing and CTA/contact changes.
- Avoid required third-party plugins unless clearly documented and marketplace-compliant.
