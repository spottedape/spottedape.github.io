# The Spotted Ape Design Audit

## Scope and baseline

Reviewed the Quarto configuration, shared shell and scripts, all 71 authored `.qmd` files, first-party stylesheets, and the existing audit/implementation notes. The main site is rendered by `_quarto.yml` into `docs/`; `theme.css`, `head.html`, `navbar.html`, `footer.html` and `site.js` provide the shared presentation. The homepage additionally uses its Vite-built component stylesheet. Pitch decks have their own presentation styles.

The worktree contained extensive pre-existing edits, including course sources and generated `docs/` pages. Those were preserved. The Digital Acumen/Solar Excel materials are `Courses/DLA/**` and `Courses/solar-investment/**`, with published counterparts under `docs/Courses/**`. The supplied YouTube video appears in both course sources. None of those course files or outputs was edited for this audit. The main Quarto render glob still includes the Solar Investment landing page; its shared shell and base styles are part of the baseline. The added editorial URL wrapping applies to Quarto `.uri` links only; the Solar page has none and was verified at 320px with its existing video and registration embeds intact.

## Existing strengths

- A distinctive dark charcoal, warm-light-text and acid-yellow identity, supported by Archivo, Archivo Black and Space Mono.
- Quarto provides a compact publishing architecture with shared navigation, footer, stylesheet and lightweight menu behavior.
- The homepage has a strong editorial proposition and functional challenge/workshop/timeline components; other pages use a consistent ruled-section vocabulary.
- Existing accessibility features include a skip link, focus-visible outlines, reduced-motion handling, semantic navigation, keyboard menu dismissal and responsive layouts.
- Approved imagery, course integration, archives and existing routes can remain intact; no new service or dependency is needed for the styling changes.

## Inconsistencies and risks found

- The homepage had a separate bone/blue palette, Newsreader/Geist typography and different page width/gutters from the rest of the site. Its navigation/footer overrides made the shared shell look like a second product.
- Two font requests were present in the shared head include, although the second family was only used by the homepage layer.
- The homepage stylesheet contained repeated color literals, category-specific blue/red/green accents, viewport-scaled display sizes and a continuously pulsing indicator.
- `theme.css` contains appended recovery/override rules as well as its main component definitions. This is a maintainability concern; moving rules risks changing generated Quarto behavior and the Solar course landing page, so broader cascade surgery is not included in this pass.
- `theme.scss` imports `theme.css`; `styles.css` and `mozilla.scss` are legacy/unreferenced by the active Quarto configuration. Deck styles are independent and should stay so.
- Main-site global CSS is included by the Quarto project and therefore also reaches the Solar Investment landing page. Future global selector or configuration changes require an explicit course regression check.

## Changes implemented

- Added semantic color, font and spacing tokens to the existing root token set without changing the established underlying palette.
- Rebound the homepage component layer to those tokens, the shared content width and gutters, and the shared Archivo/Space Mono families. Replaced its separate blue and pale canvas system with the existing dark/acid identity.
- Standardised homepage active states around the acid accent and existing neutral text, improved primary-action contrast, removed continuous pulsing, and changed display sizing to container-relative clamps rather than viewport-relative font sizing.
- Removed the unused second Google Fonts request; the existing Archivo/Space Mono request remains.
- Added this audit and `DESIGN-SYSTEM.md`; Quarto architecture, content, URLs, course source and course embed were not changed.

## Accessibility and responsive review

The token palette preserves strong text contrast: warm text on `#070708` and muted text on `#101112` remain well above WCAG AA text thresholds; acid yellow is paired with the dark background for emphasis and primary actions. Focus remains visible through the shared focus rule. Browser checks found no document-level horizontal overflow on the homepage at 1440, 1024, 768, 390 and 320px; the mobile menu opened, exposed links with 50px row height, and closed on Escape with focus returned. Workshops, !Khairos, Thinking, About, Contact, Methodology, Challenges and the Solar landing page were checked at desktop/mobile widths. Research, portfolio, essay archive, appointment embeds, a project page and a long-form essay were checked at desktop and 320px. A long unbroken external URL in the essay was fixed with scoped URI wrapping. The Solar landing page's video and registration embeds remain present and responsive. No automated axe scan or formal WCAG certification was performed; appointment content depends on external providers and was not validated for service availability.

## Remaining concerns

- Existing `theme.css` override layering should be consolidated in a separate, regression-tested pass, particularly because the solar course landing page shares the main Quarto configuration.
- The legacy style files should only be removed after confirming no presentation or external workflow references them.
- The generated `docs/` tree was already dirty, so the successful final render was kept in temporary output; published output was not refreshed.
- The temporary browser run logged a 404 for `posts/substack/listings.json` while Quarto's nested essay category-activation helper ran. Quarto rendering succeeds and sitewide search is disabled; confirm the category-filter behavior against the deployed base path in a separate archive-functionality pass.
