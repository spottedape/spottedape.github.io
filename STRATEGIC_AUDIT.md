# The Spotted Ape: Strategic Audit and Proposed Information Architecture

## Scope and confidence

This audit describes the repository as found on 14 October 2026. It distinguishes the current working-tree state from recommendations for a later implementation.

The working tree already contains extensive uncommitted changes: the homepage, design-system CSS, shared page components, navigation, workshops, !Khairos, Thinking, About and Contact sources have pending edits or are new; generated `docs/` output is also modified and includes untracked pages and assets. These changes pre-date this audit. They are treated as the current local baseline and have not been reverted, rendered over, or otherwise altered.

The supplied `spottedape redesign.md` is now available at the repository root and was read in full. The adjacent `REDESIGN.md` in the `thespottedape.com-web-2` checkout is a separate record of an earlier human-judgment/AI site revision; it was considered contextual material only. Strategic recommendations below are based on the supplied attachment and the requirements in the assignment.

At the initial audit stage, no Quarto render or browser validation was run. The current output directory is `docs/`, and it contains substantial uncommitted generated changes. Subsequent implementation validation was rendered to temporary output; `docs/` was not overwritten. See `IMPLEMENTATION_REPORT.md` for the final checks.

## Current site map

The current primary navigation, in order, is:

- **Home** — `/` (`index.qmd`)
- **Workshops** — `/workshops/`
- **!Khairos** — `/khairos/`
- **Thinking** — `/thinking/`
- **About** — `/about/`
- **Talk about your team** — `/contact/`

Other authored destinations and archives are:

- **Appointments and events** — `/appointment/`; embeds Google Calendar scheduling and a Luma calendar.
- **Research** — `/research/`; papers, reports, guest lectures, bibliography and research figures.
- **Selected projects** — `/portfolio/`; six project pages, including behavioural research, service design, wellness, tourism, remote video and creative-AI education.
- **Essay archive** — `/posts/substack/`; 19 Substack-origin essays are present as Quarto sources.
- **Presentations** — several `/pitchdeck/` documents are rendered or configured for rendering, but are not part of the principal navigation.

The root also contains archival snapshots (`index-20260830.qmd.old`, `_quarto.ymlold`), shared Quarto includes, local extensions and generated output. The old snapshots are not active pages.

## Current positioning: repository observations

The site's central question is **“If AI does the work, what are you doing?”** The homepage frames AI as a change to the relationship between production, competence and professional learning. Its core concerns are human judgment, agency, evidence, uncertainty, review, responsibility and the loss of practice through delegation.

The phrase **Agentic Designer** describes a person shaping a system in which people and machines may act. **!Khairos** provides a five-stage account of capability, from Explorer through Steward, with practice, artifacts and reflection at each stage. It is presented as a working framework, not a validated scale.

Current workshop offers are:

1. Agentic Designer Briefing — 60–90 minutes; maps production, decisions and displaced learning; intended output is a Human Agency Map.
2. Judgment Under Abundance — half day; practises criteria-led selection and critique; intended output is a team-specific Judgment Rubric.
3. Human × AI Workflow Lab — full day; traces workflow decisions and failure points; intended outputs are an Agentic Workflow Blueprint and Decision Rights Map.
4. !Khairos Capability Programme — multi-session; uses repeated application, critique and revision; intended outputs develop over time.

The descriptions are unusually concrete for a small consultancy site: they identify a problem, participants, activity, deliberate difficulty, capability, intended artifact and observable signs worth examining. Durations are explicitly indicative, not commercial guarantees. The Contact page offers an email route and makes scope and fees subject to agreement.

## Supplied strategy: interpretation and evaluation

The attached document proposes a coherent sequence: Martin's strategy-as-choice clarifies where and how to compete; Brown's learning ecology develops the capabilities and knowledge flows needed to act; disciplined workshop design lets leaders practise, test and leave with working artifacts. The existing focus on AI-mediated work can supply a contemporary context for these choices, while human judgment and organisational integrity remain the connective concern. AI should not be forced into every example.

The three proposed offers and custom executive programme are directionally compatible with the site, but they change its buyer and unit of value. The current site chiefly addresses professional judgment and team workflows; the strategy proposes executive leadership, competitive choices and organisational learning architectures. This needs an explicit positioning decision and one consolidated offer portfolio, not simply additional workshop cards.

The attachment is a useful strategic brief, not publish-ready copy or a verified facilitator specification. In particular:

- The “80%” planning-cycle headline has no supporting citation in the document. Do not publish it. “100-page” binders, planning rituals, and claims that most organisations fail for a particular reason are rhetorical examples, not established facts about clients.
- The proposed social-proof line naming Rotman, Deloitte Center for the Edge and “advanced adult pedagogy” could imply affiliations or endorsement. No such relationships are established in the repository; omit it unless independently verified and explicitly approved.
- Phrases such as “eliminates endless boardroom arguments,” “peak cognitive attention,” “extreme performance,” “friction-erasure protocols,” “board-ready,” and a pedagogical “guarantee” overpromise or obscure what the work does. Use observable activities and intended outputs instead; do not promise agreement or competitive advantage.
- The 20-minute activity cadence and prescribed breaks are design suggestions, not universal research-backed rules established by the supplied document. Retain varied formats, outcome-led activity and appropriate breaks as principles; confirm any exact rhythm against facilitator practice and audience needs.
- Proposed durations (one day or three sessions for the Choice Sprint, two days for the Learning Lab, one day for the Studio) and the sample one-day masterclass schedule are not verified delivery commitments. Treat them as options to confirm before publication.
- The masterclass sequence is valuable as a design skeleton: strategic framing, choice cascade and where-to-play boundaries, “what would have to be true?” hypothesis testing, Judging Hat stress-test, stocks-to-flows framing, creation-space prototyping, and executive synthesis. Publish a concise programme only after activities, outputs, timing and facilitator feasibility are confirmed; do not reproduce the operational schedule on the homepage.
- The proposed health-check, tacit-flow score, PDF diagnostics and media flywheel are future concepts, not existing products. Begin with static needs navigation. Do not imply that a score is validated or that a downloadable report, video or playbook exists.
- The document contains `[span_...]` reference artifacts, including in its curriculum table. None should enter published content. The Fitzpatrick & Hunt source/title and any external claims about Martin, Brown, creation spaces or knowledge-flow trends should be citation-checked before they are used as evidence.

These qualifications preserve the strategic substance while avoiding fabricated social proof, unsupported statistics, unverified delivery promises and claims of proprietary or validated methods.

## Existing strengths

- A distinctive, memorable hero question and a clear intellectual territory: what happens to judgment and expertise when production is delegated to AI?
- Practical explanations of review, evidence, uncertainty, stopping, decision ownership and escalation, rather than a generic promise to “transform” organisations.
- A coherent relationship among behavioural design, strategic design and systems thinking in the current workshop material.
- Tangible workshop outputs and a process that can be connected to real work samples and workflows.
- Biographical and credibility material already exists in research, publications, guest lectures and project pages. The About page links to this evidence rather than inventing new affiliations.
- Relevant intellectual assets include work on AI and incentives, machine-mediated creativity, learning, expertise, behavioural design and organisational systems.
- The current contact route is simple and does not require a new form service or visitor data collection.
- The present identity is recognisable and has substantive responsive and accessibility provisions; it should remain the visual baseline.

## Design system to preserve

The active site design is defined by `theme.css`; `_quarto.yml` loads that stylesheet. `styles.css` imports it. `theme.scss` and `mozilla.scss` contain legacy theme material and are not the current site's styling entry point.

- **Palette:** near-black `#070708` and `#101112`; warm light text `#ece9e1`; muted text `#b0aea7`; acid yellow `#d4ff00`; border `#393a35`.
- **Typography:** Archivo Black for display headings, Archivo for body text and Space Mono for labels and technical accents. The current `head.html` loads these from Google Fonts.
- **Layout:** 1200px content measure, 32px desktop gutters (20px on narrow screens), 100px section rhythm (72px on mobile), restrained 4px corner radius.
- **Hero and navigation:** centered, full-viewport hero; oversized display type; acid-yellow emphasis; fixed dark navigation with translucent treatment; compact mobile menu.
- **Components:** uppercase monospace eyebrows, ruled editorial sections, accent-led buttons and links, simple grids, workshop rows, framed artifacts, process steps and a multi-column footer.
- **Responsive rules:** breakpoints at 1000px and 600px; grid and navigation collapse for smaller viewports.
- **Accessibility present in source:** skip link and main-content target, labeled navigation, focus-visible outlines, keyboard Escape handling for the menu, `aria-current`, alt text on research figures, and reduced-motion handling.

These are protected decisions, not an invitation to refresh the aesthetic. New pages should use the existing classes and layout vocabulary. The older SCSS contains a different light/pink theme; it should not be reactivated accidentally.

## Content strengths and weaknesses

### Intellectual material to retain

The 19 essay sources have multiple useful strands. Strong direct links to the proposed direction include AI incentives and organisational integrity (for example, “HAL 9000 and the Market’s Moloch Problem”), strategic assumptions and the limits of optimisation (“The Laboratory Fallacy”), AI and creative practice (“Moholy-Nagy and the Art of Remote Creation”, “Creativity in the Age of Machines”, “Co-Create or Die!”), and learning, expertise or play (“The Matthew Effect…”, “Wisdom is Like a Baobab Tree”, “Playing in the River Before the Fire”). Other essays address AI history, product and market dynamics, design, African contexts and geopolitics. They need not all be forced into an AI-consulting narrative.

Existing project and research sources support a credible account of applied behavioural design, service design, adoption, education and research. The Sibabalwe Bakery work is a particularly relevant example of reframing a problem, learning from context and designing a participatory intervention. The Creative × AI workshop series is relevant to structured learning and experimentation.

### Underdeveloped or potentially confusing

- The current commercial centre is professional judgment and capability in AI-mediated work. The proposed direction makes executive strategy and organisational learning more central. This is a meaningful change in buyer, problem scale and expected engagement, not just a copy edit.
- Current offers are focused on human–AI work practices. They do not yet provide the proposed strategy-choice cascade, knowledge-flow blueprint or executive alignment interventions.
- The homepage explains the human capability problem with depth, but an executive buyer may not quickly see the strategic decision the practice helps them make, the organisational conditions addressed, or the resulting business artifact.
- !Khairos is a distinctive capability framework, but it risks competing with a new Martin/Brown methodology if both are presented as the primary organising model. Its role needs to be subordinate and explicit.
- “Blended Epistemology Studio” is intellectually specific but may be opaque to buyers without a plain-language descriptor and concrete activities.
- Some portfolio pages make outcome or impact claims (including increased engagement or measurable shifts) without visible supporting citations in the page itself. Preserve the work, but verify evidence and permissions before foregrounding those claims commercially.
- The homepage's individual report example and reported nine-day result are carefully qualified as an individual account, not a general outcome. Keep that distinction and confirm permission before expanding it into a case study.
- Several essays are interpretive and make claims that require source checking before reusing them as factual support for commercial claims. Keep essays distinct from evaluated evidence.

## Current structural and technical findings

- Quarto is the static-site generator. `_quarto.yml` sets `type: website`, `output-dir: docs`, `site-url: https://thespottedape.com`, UK English, a site description, Open Graph metadata, the favicon, shared HTML includes and `theme.css`.
- Quarto renders `**/*.qmd`, excluding `includes/**`, `pitchdeck/!*.qmd` and `pitchdeck/wk-ai-in-praxis.qmd`. The site has custom extensions for D2, embedded PDFs and nutshell annotations. No new front-end framework is warranted.
- `CNAME` names `thespottedape.com`. `.github/workflows/publish.yml` renders on pushes to `main` and deploys the `docs` artifact using GitHub Pages actions. The deployment architecture is already suitable and should remain.
- `search: false` means there is no Quarto site search. Listing pages are used for portfolio and Substack content. Page-level descriptions exist on the principal newer pages; older research and presentation pages are less consistent.
- The site uses a lightweight custom menu script and existing Quarto libraries. Google Fonts are a remote dependency. No analytics or contact-form backend was found in the inspected source.
- Contact is a `mailto:` link to `contact@spottedape.com`; the inbox's monitoring status is not established here. The calendar and Luma embeds are separate appointment/event mechanisms, not a verified organisational-enquiry workflow.
- The Substack sync workflow has a concrete likely failure: it stages `Docs/posts/substack` while the script writes `posts/substack`; on the Linux GitHub runner the case-sensitive path will not match. The script imports `feedparser`, BeautifulSoup and `markdownify`, but the workflow installs only `feedparser`. This automation is separate from site publishing and should be reviewed independently.
- `pyproject.toml` describes the project as `marem-github-io` and contains Python/data-analysis dependencies, not a Quarto site build specification. Quarto is installed by the publishing workflow, but its version is not pinned in the inspected workflow.
- The current output directory `docs/` has extensive dirty tracked and untracked generated changes. A render to the normal output directory is not safe during this review. No render, deployment, commit or push was performed.

## Proposed positioning: recommendation

Organise the new proposition around this relationship:

> AI changes the conditions of work and competition. Strategy clarifies where and how an organisation will respond. Organisational learning builds the capabilities and knowledge flows required to act. Human judgment makes the choices, tests assumptions and keeps consequential decisions accountable.

The Spotted Ape can be positioned as a strategic design and executive-learning practice that helps leadership teams make consequential choices under uncertainty and develop the organisational capability to act on them. Workshops should leave teams with a decision, a tested strategic hypothesis, a learning/knowledge-flow design, or another explicit working artifact—not a generic plan or a promise of transformation.

This integrates the existing AI/judgment identity rather than abandoning it: AI is a powerful contemporary change in the conditions of competition and work, but not the required subject of every page or intervention. Judgment and accountability connect the choice of direction to the way it is learned, tested and enacted.

The intellectual frameworks should work as one practical sequence, not as three independent endorsements:

1. **Strategy as choice:** clarify aspiration, where to play, how to win, required capabilities and management systems; make assumptions explicit and ask what would have to be true.
2. **Scalable learning:** identify the knowledge held in repositories and the tacit knowledge that moves through practice, networks and creation spaces; design experiments and flows that help the organisation adapt.
3. **Disciplined learning design:** profile participants, define knowledge/skills/wisdom outcomes, sequence varied activities, apply learning to realistic scenarios, allow reflection and breaks, and produce tangible outputs.
4. **Human judgment:** compare evidence and alternatives, notice uncertainty and consequence, and name who owns or can challenge a decision.

Roger Martin, John Seely Brown, and Fitzpatrick & Hunt should be credited as intellectual sources where relevant, not presented as partners or as the authors of The Spotted Ape's combined practice. Do not describe third-party frameworks as proprietary inventions.

## Proposed information architecture

Preserve existing URLs and the visual system. Add only the new destinations needed for the buyer journey, using ordinary Quarto pages and accessible in-page links.

### Primary navigation

1. **Home** — `/`
2. **Workshops & Labs** — retain `/workshops/`
3. **Organisational Challenges** — new `/challenges/`
4. **Methodology** — new `/methodology/`
5. **Thinking / Field Notes** — retain `/thinking/`; preserve `/posts/substack/` as the archive
6. **About** — retain `/about/`
7. **Contact** — retain `/contact/`

Keep `/khairos/`, `/research/`, `/portfolio/` and `/appointment/` available at their current URLs. Link !Khairos as a supporting capability framework from Methodology and relevant workshop material rather than giving it equal prominence as a competing top-level strategy. Retain research, portfolio, presentations and essay URLs for discoverability and existing links. Do not reorganise or rename the essay archive as part of this first information-architecture change.

### Page objectives and content plan

- **Home:** retain the existing hero question and explain it in the first viewport through the organisational proposition. Follow a short sequence: changing conditions → consequential choices → principal workshops → how the work combines strategy, learning and judgment → enquiry. Keep the homepage an orientation page, not the methodology essay.
- **Workshops & Labs:** present four clear engagements. (A) Strategic Choice Cascade Sprint: integrated one-page cascade and tested assumptions. The attachment suggests a one-day intensive or three-session sprint; confirm before stating either as available. (B) Scalable Learning & Knowledge Flows Lab: practical knowledge-flow and learning blueprint, including tacit knowledge and creation spaces; the proposed two-day format is unconfirmed. (C) Blended Epistemology Studio: translate knowing/making/playing and abductive reasoning into alternative hypotheses, scenario prototypes and assumption tests; explain the title plainly. The proposed one-day format is unconfirmed. (D) Executive Offsites & Custom Masterclasses: combine modules around an agreed executive decision. For every offer state problem, participants, activity, decision/capability, artifact, confirmed duration/format and an enquiry route.
- **Organisational Challenges:** a concise, accessible index and six substantive sections: Planning Trap; Analytical Paralysis; Knowledge Stock Collapse; Tacit Knowledge Silos; Innovation Disconnect; Executive Alignment. Each section moves from symptoms to persistence mechanism, underlying strategic/learning issue, relevant intervention and workshop link. Start with static navigation; no scores, hidden assessment or complex JavaScript are needed.
- **Methodology:** show how strategic choices define what must be learned, how making and experimentation produce evidence, and how judgment governs selection and responsibility. Explain the practical roles of design thinking and abductive reasoning. Make Knowledge, Skills and Wisdom distinct learning outcomes and show how participant profile, activity variety, scenario practice, breaks, reflection and tangible artifacts shape delivery.
- **Flagship masterclass:** a dedicated detail section or page may describe the supplied sequence from strategic framing through the choice cascade, where-to-play choices, hypothesis tests, Judging Hat, stocks-to-flows, creation-space exercise and executive synthesis. Treat the supplied timetable, room setup and exact activity durations as a draft facilitator skeleton pending confirmation, not a promised programme.
- **Thinking / Field Notes:** retain all essays and the current archive. Organise discovery with a small set of editorial themes: Strategy and Choice; Learning and Knowledge; AI and Human Judgment; Organisational Integrity; Behavioural Design; Strategic Experimentation. Keep this as an editorial taxonomy, not a claim that every essay addresses every theme.
- **About:** retain only verifiable biography, research, teaching and project material. Connect strategic design, behavioural science, organisational learning, executive education and human judgment without adding credentials, partners or client claims.
- **Contact:** keep the existing email enquiry route and make the four engagement types clear. Keep calendar booking distinct unless its intended audience and availability are confirmed. Do not introduce a third-party form or collect information unnecessarily.

### Challenge-to-intervention mapping for review

- **Planning Trap** → Strategic Choice Cascade Sprint; shift from forecasting/plans to explicit integrated choices and assumptions.
- **Analytical Paralysis** → Strategic Choice Cascade Sprint and Blended Epistemology Studio; use “what would have to be true?” and bounded tests to move from analysis to a choice.
- **Knowledge Stock Collapse** → Scalable Learning & Knowledge Flows Lab; connect repositories to active practice, feedback and knowledge flows.
- **Tacit Knowledge Silos** → Scalable Learning & Knowledge Flows Lab; surface expertise through communities of practice, shared work and creation spaces.
- **Innovation Disconnect** → Blended Epistemology Studio with the learning lab; connect experiments to strategic choices, capability development and a next decision.
- **Executive Alignment** → Executive Offsites / Strategic Choice Cascade Sprint; make choices, trade-offs, assumptions and capability implications discussable together.

These are initial editorial mappings, not validated diagnoses or claims that one workshop solves a systemic organisational issue.

## Reuse, preservation and boundaries

- Reuse the current workshops' concrete learning mechanics—real work, explicit criteria, critique, scenario/failure testing, reflection and artifacts—where they support the new strategic offers.
- Reuse project/research provenance selectively; qualify outcome statements and verify permission and evidence before converting projects into commercial case studies.
- Retain existing essays, research material, portfolio pages, appointment route, visual assets, extensions, public presentation routes and current URLs. Link to them deliberately rather than deleting or indiscriminately promoting them.
- Do not copy Gaussian's visual design. The reference is only an information-architecture and buyer-journey prompt.
- Do not introduce prices, client testimonials, institutional affiliations, performance statistics, validated diagnostics, downloadable tools or media assets that do not exist.
- Do not activate legacy `mozilla.scss`/`theme.scss` styling or alter the dark palette, fonts, hero treatment, spacing language, navigation style or established CSS components.

## Risks and unresolved decisions

1. **Positioning hierarchy:** implemented as an executive strategic-choice and organisational-learning proposition, with AI/judgment as an important context and accountability lens. This intentionally broadens the current individual/professional capability emphasis.
2. **Offer portfolio:** implemented as one four-offer catalogue. Useful human–AI judgment activities are retained as modules or examples within the new learning/strategy experiences, with !Khairos as supporting framework material.
3. **Delivery feasibility:** confirm actual audiences, session formats, duration, group size, room/remote requirements, facilitation capacity, preparation, follow-up and fees before publishing commitments. The attachment's timetable and formats are proposed, not verified.
4. **Evidence and attribution:** verify the contact inbox, portfolio outcomes and any individual case-study permission. Check the sources for the proposed workshop pedagogy and theoretical claims. Do not use the unsupported 80% statistic, imply named institutional endorsements, or turn workshop intentions and anecdotes into general outcome claims.
5. **Diagnostic scope:** begin with a static, accessible needs navigator. Any future score should be described as indicative unless independently validated; do not collect visitor data without a clear method and policy.
6. **Editorial roadmap:** article, video, PDF and lead-magnet ideas in the attachment are proposals only. Verify research and references, remove every `[span_...]` artifact, and publish media or downloads only when the finished asset exists.
7. **Uncommitted repository work:** all current pending changes must be preserved. In particular, no direct render to `docs/` should happen until there is an agreed safe validation/output strategy.
8. **Separate automation issue:** the Substack sync workflow's path casing and missing Python dependencies require their own fix and validation; they are not part of this strategic content implementation.

## Audit conclusion

The site already has a distinctive, credible foundation in AI-mediated work, professional judgment, behavioural design and learning-by-practice. The strategic refresh should build upward from that foundation: broaden the scale of the problem from individual task practice to executive choices and organisational learning, while retaining human judgment and accountability as the connective discipline. The recommended information architecture creates a clear buyer journey without replacing Quarto, changing the design language or sacrificing established content and URLs.

The audit and proposed architecture were completed before implementation. Following the user's instruction to implement them, the website sources now reflect the recommended position and page structure. Commercial formats, evidence and delivery commitments remain subject to the checks listed above and in `IMPLEMENTATION_REPORT.md`.