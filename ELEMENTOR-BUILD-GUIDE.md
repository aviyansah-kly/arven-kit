# Elementor Build Guide — ARVEN Homepage

## Global Style
- Content width: 1240px
- Desktop side padding: 24px
- Mobile side padding: 16px
- Primary font: Manrope
- Display serif: Instrument Serif
- Ink: #171915
- Paper: #FAF9F5
- Warm: #F3F1EA
- Muted: #72756D
- Accent: #A7B68D

## Breakpoints
- Desktop: > 920px
- Tablet: 561–920px
- Mobile: <= 560px

## Elementor-friendly Section Mapping
1. Header — Container + Nav Menu + Button
2. Hero — 2-column container; left copy, right dashboard composition
3. Trust — horizontal flex row / wrapping on tablet
4. Why ARVEN — nested container with 3 columns
5. Services — one featured block + repeating horizontal service rows
6. Impact — 2-column layout + 2×2 metric grid
7. Case Study — 2-column feature
8. Approach — 2-column section + four repeated steps
9. Founder — 2-column quote section
10. Insights — 3-column cards
11. CTA — centered single-column
12. Footer — 3 columns

## Responsive Rules
- Reorder content for readability rather than only shrinking type.
- On mobile, all main content becomes one column.
- Services retain compact numbered rows.
- Case study results stack vertically.
- Metric cards switch from 2×2 to 1-column below 560px.
- Minimum interactive height: 44–50px.

## ThemeForest production note
When implementing the final kit, recreate visual treatments with native Elementor controls wherever possible and avoid dependencies that cannot be exported reliably.
