# The Spotted Ape Design System

A compact guide to the shared editorial language. Use Quarto classes and existing shared shell before adding page-specific rules. The homepage component layer is scoped to `#spotted-ape-home`; do not extend its selectors into the course routes.

## Color tokens

| Token | Value / source | Use |
|---|---|---|
| `--color-background` | `--bg` (`#070708`) | Primary page canvas |
| `--color-background-secondary` | `--bg2` (`#101112`) | Alternate section and active surface |
| `--color-surface` | `--bg2` | Elevated/contrasting surface |
| `--color-text` | `--text` (`#ece9e1`) | Headings and primary copy |
| `--color-text-secondary` | `--dim` (`#b0aea7`) | Supporting copy and metadata |
| `--color-text-muted` | `--dim` | Captions and secondary metadata |
| `--color-accent` | `--accent` (`#d4ff00`) | Emphasis, active states and primary action |
| `--color-accent-hover` | `--text` | Primary action hover |
| `--color-border` | `--border` (`#393a35`) | Rules, dividers and outlines |
| `--color-focus` | `--accent` | Visible keyboard focus |
| `--color-error` | `#ff8a8a` | Error feedback when required |
| `--color-success` | `--accent` | Success feedback when required |

Keep yellow selective. Pair it with dark text/backgrounds; do not use color alone to encode state. The error token is reserved for functional feedback, not decoration.

## Typography

- Display and major headings: `--font-display` / Archivo Black.
- Body and interface copy: `--font-body` / Archivo.
- Eyebrows, labels and technical metadata: `--font-mono` / Space Mono.
- Base body: 16px with 1.6 line-height. Keep editorial paragraphs near `--measure` (70ch); use shorter measures for introductions.
- Use balanced headings, consistent margins and container-relative `clamp()` sizing for display elements where needed. Do not use viewport width directly to scale type.
- Use the supplied families and available weights; avoid adding font families or synthetic weight variations.

## Spacing and widths

- Base spacing steps: `--space-1` 8px, `--space-2` 12px, `--space-3` 16px, `--space-4` 24px, `--space-5` 32px, `--space-6` 48px, `--space-7` 72px, `--space-8` 100px.
- Standard content maximum: `--content` (1200px); editorial measure: `--measure` (70ch).
- Desktop gutters: `--gutter` (32px); narrow-screen gutters: 20px at the shared 600px breakpoint.
- Standard section rhythm: `--section` (100px desktop, 72px mobile). Use narrower editorial widths and wide visual sections only when the content calls for them.
- Shared header height: `--nav-h` (68px desktop, 72px mobile); shared radius: `--r` (4px).

## Layout and components

- Use `.wrap` for standard content and `.hero-inner` for hero layouts; use `.sec` for ruled content bands and `.dark` for the secondary background.
- Use `.page-head`, `.eyebrow` and `.sec-h` for page introductions and section headings.
- Use `.editorial-grid` and `.observation` for repeated editorial items; `.offer` for workshop detail rows; `.process` for ordered activity sequences; `.stage` for !Khairos stages.
- `.btn-p` is the primary action; `.btn-g` is secondary; `.text-link` is an editorial link. Preserve visible underlines or borders for affordance.
- Homepage-only `.sa-*` components inherit shared tokens and widths. Keep its bespoke narrative structure, but not a separate visual palette.
- Keep images and video responsive with intrinsic proportions; preserve captions and descriptive alternatives. Course media and styles remain course-owned.

## Responsive and accessibility conventions

- Shared breakpoints: 1000px for navigation/grid adaptation and 600px for compact mobile layout. Homepage component breakpoints are 900px, 700px and 380px.
- Prevent grid shrinkage with `minmax(0, 1fr)`; preserve contained horizontal schedule rails without document-level overflow.
- Maintain semantic heading order, descriptive link purpose, labeled controls, keyboard operation and a visible focus outline. Keep touch controls at least 44px high where practical.
- Honor `prefers-reduced-motion`; do not use continuous decorative animation or delay access to content.
- Check text/background pairs against WCAG 2.2 AA (4.5:1 for normal text, 3:1 for large text and essential UI boundaries). Re-check contrast when introducing opacity or new colors.

## Quarto and course boundary

`_quarto.yml` loads the shared `theme.css` and shared HTML shell. `theme.scss` is a legacy import; `styles.css` and `mozilla.scss` are not configured as the active site stylesheet. Presentation styles remain separate. `Courses/DLA/**` is excluded by the project render glob; `Courses/solar-investment/**` is still rendered by the main project and must be treated as a protected course integration. Do not add course-specific changes or alter global styles without checking its rendered output.
