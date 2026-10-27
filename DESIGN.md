---
name: Exxat Form Configuration Guide
description: An internal training guide set as a numbered, ruled, flat specification sheet in Exxat navy, pink and warm off-white.
colors:
  sheet: "#f6f2f0"
  sheet-surface: "#fdfcfb"
  navy-ink: "#041c2c"
  slate-ink: "#3b5670"
  hairline: "#d9d2cb"
  rule-navy: "#041c2c"
  exxat-pink: "#c9156a"
  exxat-pink-fill: "#d41569"
  exxat-pink-brand: "#e31c79"
  pink-on-fill: "#ffffff"
  pink-wash: "#fde9f1"
  head-navy: "#041c2c"
  head-ice: "#edf7fd"
  head-sky: "#99d2ff"
  head-line: "#2a4a66"
  tint-blue: "#e9f2ff"
  code-sand: "#ebe6e1"
  panel-navy: "#041c2c"
  panel-ice: "#edf7fd"
  ok-green: "#1d6b45"
  warn-amber: "#a85b00"
  info-blue: "#004b87"
  req-violet: "#7a3fb8"
  bad-red: "#a63a26"
  topic-overview: "#0e7c86"
  topic-create-form: "#e31c79"
  topic-controls: "#1f66c9"
  topic-instance-forms: "#5b4bd6"
  topic-step14: "#b4560a"
  topic-multi-preceptor: "#4d7c0f"
  topic-notifications: "#c53030"
  topic-terms: "#8b5e34"
  topic-workflows: "#0e7490"
  topic-glossary: "#2f7d3b"
  dark-sheet: "#041c2c"
  dark-sheet-surface: "#0a2436"
  dark-ink: "#edf7fd"
  dark-slate-ink: "#a9c3d6"
  dark-hairline: "#1f3b52"
  dark-rule: "#edf7fd"
  dark-pink: "#ff5fa6"
  dark-pink-on-fill: "#041c2c"
  dark-pink-wash: "#3a1a2c"
  dark-head: "#02131f"
  dark-tint: "#0f2d45"
  dark-ok: "#6ccf9f"
  dark-warn: "#ffb15c"
  dark-info: "#8fc3ff"
  dark-req: "#c9a6ff"
  dark-bad: "#ff9d89"
typography:
  display:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 4.6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.55rem, 2.8vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  subtitle:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.76rem"
    fontWeight: 500
    letterSpacing: "0.1em"
  number:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.82rem"
    fontWeight: 500
    letterSpacing: "0em"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
  swatch: "2px"
  hair: "3px"
  field: "4px"
  pill: "999px"
  round: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "48px"
  xxl: "64px"
  gutter: "clamp(20px, 4vw, 56px)"
  margin-col: "120px"
  col-gap: "clamp(32px, 4vw, 64px)"
components:
  pill-primary:
    backgroundColor: "{colors.exxat-pink-fill}"
    textColor: "{colors.pink-on-fill}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  pill-primary-hover:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.sheet}"
  pill-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  pill-outline-hover:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.sheet}"
  bar-next:
    backgroundColor: "{colors.exxat-pink-brand}"
    textColor: "{colors.pink-on-fill}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
  bar-prev:
    backgroundColor: "transparent"
    textColor: "{colors.head-ice}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.head-ice}"
    rounded: "{rounded.round}"
    size: "36px"
  input-text:
    backgroundColor: "{colors.sheet-surface}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  code-panel:
    backgroundColor: "{colors.panel-navy}"
    textColor: "{colors.panel-ice}"
    rounded: "{rounded.field}"
    padding: "14px 0"
  running-head:
    backgroundColor: "{colors.head-navy}"
    textColor: "{colors.head-ice}"
    height: "52px"
---

# Design System: Exxat Form Configuration Guide

## Overview

**Creative North Star: "The Specification Sheet"**

Every Form Builder setting is a parameter, so the guide is set the way a parameter sheet is set: numbered, ruled, flat, and nothing boxed. The page is a warm off-white sheet under a 52px deep-navy running head. Groups open with a 2px navy rule and rows are separated by 1px hairlines; there are no cards, no containers, no shadows. Depth is rule weight alone. The reader always knows the sheet number (in the margin), the part they are on (the rail) and what comes next (the ruled Next part link).

Exxat pink is disciplined. It does two jobs only: the mono numbers and labels that index the sheet (SHEET 02, 01, PART 1 OF 12, figure numbers, step numbers) and the one filled primary pill per sheet. Every topic also owns one small hue, shown as a 10px square swatch in the contents, in the sheet label, on the rail's current mark, and on hover of links inside that topic. Inter carries the display and reading voice; JetBrains Mono carries every number, ID, URL and label. Dark mode inverts the sheet to navy and keeps every rule, weight and position unchanged.

The build deliberately refuses the category default of a dark hero over a bento of icon cards. Glows, orbs, gradient or shimmering text, floating chips, tilted mock-ups, icon tiles, pill badges, hover-lift shadows, the wave divider and the bento grid were removed and must not return.

**Key Characteristics:**
- Flat sheet: 2px navy rule opens a group, 1px hairline separates rows, nothing boxed
- Pink is an index colour (mono numbers, labels) plus one filled pill per sheet
- Per-topic hue lives only in the swatch, the rail mark, in-topic headings and hover
- Inter for words, JetBrains Mono (tabular) for every number, ID, label and code
- Dark mode is the same sheet printed on navy; rules and layout do not move
- Motion is short and settled: 200 to 250ms fades, one intro splash, nothing loops

## Colors

A warm paper sheet, deep navy ink and a single pink index colour, with ten small topic hues and five callout colours kept at hairline and label scale.

### Primary
- **Exxat Pink** (`exxat-pink`): the index colour. Mono numbers in the contents list, sheet labels, part crumbs, step counters, figure numbers, meta labels, Next-part kicker, caret, focus outline and text selection wash (`pink-wash`). Never used for running text or headings.
- **Exxat Pink Fill** (`exxat-pink-fill`): the one filled primary pill on the home sheet ("Start with 01 Overview"), white type on it.
- **Exxat Pink Brand** (`exxat-pink-brand`): the brand-literal pink of exxat.com. Fixed, not themed. Used only on navy: the "xx" of the wordmark, the intro word and sweep line, the topic bar's Next pill, the reading-progress bar and footer link hover.

### Secondary
- **Topic hues** (`topic-overview` through `topic-glossary`): one per sheet, exposed to the topic as `--tc`. Used for the 10px square swatch, the rail's current mark, step counters and the "source" label inside a topic, glossary terms, in-topic links, and link hover. Never a background, never a border on a box.

### Tertiary
- **Callout and state colours** (`info-blue`, `warn-amber`, `ok-green`, `req-violet`, `bad-red`): the 1px left hairline, the mono label and the 20px masked icon of a callout; the 2px top rule of a Do/Don't pair; pass/fail text in the Feature ID checker; the green outline on a completed download button.

### Neutral
- **Sheet** (`sheet`): the page. **Sheet Surface** (`sheet-surface`): input fields only.
- **Navy Ink** (`navy-ink`): headings, body text, the 2px opening rule (`rule-navy`), the outline pill, the back-to-top disc.
- **Slate Ink** (`slate-ink`): ledes, blurbs, captions, descriptions, table headers, contents labels, rail items at rest.
- **Hairline** (`hairline`): every 1px row separator, figure border, rail line, keyboard-help box border.
- **Head Navy / Head Ice / Head Sky / Head Line** (`head-navy`, `head-ice`, `head-sky`, `head-line`): the running head, topic bar, footer and code panel. Ice for text, sky for mono labels, line for the 1px link underline and ghost button borders.
- **Tint Blue** (`tint-blue`): table row hover only. **Code Sand** (`code-sand`): inline code background.

### Dark theme
Applied by `prefers-color-scheme: dark` (unless `data-theme="light"`) and by `[data-theme="dark"]`. The sheet becomes `dark-sheet`, ink becomes `dark-ink`, the opening rule becomes ice (`dark-rule`), hairlines `dark-hairline`, the running head drops a shade to `dark-head`. Pink lifts to `dark-pink` for both index and fill, with navy type on the fill. Topic and callout hues lift to pastel versions. Brand pink `#e31c79` stays fixed because it only ever sits on navy.

### Named Rules
**The Two Jobs Rule.** Pink indexes (mono numbers and labels) and fills exactly one primary pill per sheet. It is never a heading colour, a border on a box, or a background wash larger than a selection.

**The Swatch Rule.** A topic's hue appears as a 10px, 2px-radius square and as the rail's struck mark. It colours small text on hover and counters inside its own sheet; it never tints a surface.

**The Rule Weight Rule.** A 2px navy rule opens a sheet, a table, a contents list or a parts list. A 1px hairline separates rows, steps, parts and figures. There is no third weight and no box.

## Typography

**Display Font:** Inter (with Helvetica Neue, Arial, sans-serif), variable 400–700 with optical sizing, from Google Fonts
**Body Font:** Inter
**Label/Mono Font:** JetBrains Mono 400 and 500 (with ui-monospace, Menlo, Consolas), from Google Fonts

**Character:** Tight, heavy Inter headings (negative tracking down to -0.04em on the wordmark) set against a calm 1.6–1.7 reading measure. Every number, ID, URL, code string and uppercase label switches to JetBrains Mono with tabular numerals, so the page reads like a typed form rather than a brochure.

### Hierarchy
- **Display** (700, clamp(2.6rem, 4.6vw, 4rem), 1.02, -0.035em): the home title only, balanced wrap.
- **Headline** (700, clamp(2rem, 4vw, 3rem), 1.08, -0.03em): the topic title in the sheet header, max 20em.
- **Title** (700, clamp(1.55rem, 2.8vw, 2rem), 1.15, -0.025em): a part heading. Inline code inside it takes the topic hue.
- **Subtitle** (600, 1.22rem, -0.01em): h3 within a part and the "Steps at a glance" summary, each opened by a 1px hairline above.
- **Lede** (400, 1.15rem / 1.12rem, 1.55, slate): home lede and topic blurb, max 32em / 60ch.
- **Body** (400, 1.02rem, 1.7): topic prose, max 72ch. Base body is 16.5px / 1.6 (16px under 620px).
- **Contents title** (600, 1.15rem, 1.3, -0.01em) with a 0.84rem slate description beneath.
- **Label** (Mono 500, 0.76rem, 0.1em, uppercase): margin labels, sheet crumb, part crumb, table headers (0.08em), contents heads (0.12em), callout labels, meta labels.
- **Number** (Mono, 0.78–0.82rem, tabular): contents numbers, step counters, parts counters, figure and workflow numbers, part counts.
- **Code** (Mono, 0.82rem, 1.6): code panel lines; inline code at 0.86em on a sand background with 3px radius.

### Named Rules
**The Mono Index Rule.** If it is a number, an ID, a URL, a key, a count or an uppercase label, it is JetBrains Mono with tabular numerals. Inter never carries a counter.

**The Leading-Zero Rule.** Sequence numbers are two digits (01, 02 … 12) via `decimal-leading-zero`, in pink or the topic hue, sitting in a 36–48px left gutter.

## Layout

The sheet is a wide page (max 1500px) with a fluid gutter of clamp(20px, 4vw, 56px). On desktop it is a three-column grid: a 120px margin column for mono labels, a 520px title block, and the contents list filling the rest, with a column gap of clamp(32px, 4vw, 64px). Padding is 64px top and 96px bottom.

A topic page is a 52px sticky navy bar, then the sheet header on the same 120px + fluid grid (56px top, 34px bottom, closed by a 2px rule), then the body: at 1200px and up a 120px sticky rail column beside a reading column capped at 1060px, prose capped at 72ch. The parts list is an auto-fill grid of 240px minimum columns; tiles, glossary entries, workflow cards and notification tiles use the same auto-fill pattern (200–300px minimums) with 32–40px column gaps and no row gaps, each item ruled by a 1px hairline above.

Vertical rhythm: h3 at 44px above / 12px below, parts at 48px padding above a 1px rule with 32px margin, figures at 1.8em, callouts at 1.5em, tables at 1.2em, the Next part link at 40px, the footer 48px clear.

Breakpoints, by max-width:
- **1199px**: the sheet collapses to one column, the margin labels hide, the title block caps at 640px; the topic header stacks with the crumb inline; the rail hides (it shows only at 1200px+).
- **900px**: the running head's document title hides.
- **640px**: home padding shrinks (40px / 64px), the meta row stacks, contents rows drop the arrow and part count moves under the title, pills go full width.
- **620px**: body drops to 16px, Do/Don't pairs stack, the topic bar wraps the Previous/Next pills to a second row, the keyboard button hides, scrolling tables gain a "Scroll sideways" mono label and a 44px fade at the right edge, scroll margin grows to 112px.

## Elevation & Depth

The system is flat. There are no drop shadows, no hover lift, no glows, no gradients on surfaces. Depth is carried entirely by rule weight (2px opens, 1px separates) and by two navy fields that sit on the sheet without edges: the running head/bar/footer and the code panel (which does carry a 1px `head-line` border and 4px radius as it is itself a sheet of another colour). Overlays (lightbox, keyboard help) use a navy scrim at 90% / 70% rather than blur. The only `box-shadow` values in the build are rings, not shadows: the rail's current mark wears a 3px sheet-coloured gap and a 1px topic-hue ring, and a focused or erroring input thickens its border by a 1px inset ring.

### Named Rules
**The No-Box Rule.** Content is never placed in a container. If a group needs separating, open it with a rule.

**The No-Shadow Rule.** `box-shadow` is permitted only as a flat ring (focus, the rail's current mark). Nothing casts.

## Shapes

Square by default. Text, rules, tables, figures and tiles have no radius. The few radii are functional: 2px on the topic swatch and the focus outline, 3px on figure images, inline code, the lightbox image and `kbd` keys, 4px on inputs, the code panel and the keyboard-help box. Pills (CTAs, Previous/Next, download, code-panel buttons) are fully round (999px) at 1.5px border or filled; icon buttons (theme, keyboard help, lightbox close and arrows, back to top) are 36–44px circles with a 1px or 1.5px border. The rail mark is an 11px circle; the glance chevron is a rotated 8px square; the contents swatch is a 10px square.

## Components

### Pills (buttons)
- **Shape:** fully round (999px), 1.5px border where outlined.
- **Primary:** pink fill (`exxat-pink-fill`), white 600 text at 0.95rem, 13px 24px padding, optional arrow icon that slides 3px on hover. One per sheet.
- **Outline:** transparent with a 1.5px navy-ink border and navy text; same padding.
- **Hover:** both invert to navy fill with sheet-coloured text over 200ms.
- **Bar pills:** on the navy topic bar, Next is brand pink `#e31c79` with white text (hover: white fill, navy text); Previous is a ghost pill with a `head-line` border that brightens to ice on hover. 7px 16px padding, 0.88rem 600, truncated title with a 0.78rem "Previous"/"Next" prefix.
- **Download button:** outline pill on the sheet, 10px 20px, 0.92rem; a completed download gains a 2px green outline.
- **Code panel buttons:** 6px 12px ghost pills on navy, 0.8rem 600, `head-line` border; primary action has an ice border; a done copy turns the border and text green.

### Icon buttons
- 36px circles (44px for back-to-top and lightbox arrows), 1.5px `head-line` border on navy, transparent fill, border brightens on hover. The theme toggle cross-fades sun and moon with a 90° rotate-and-scale over 250–350ms. Back to top is a solid navy disc that takes the topic hue on hover and fades out at the top of the page.

### Running head and topic bar
- 52px minimum, `head-navy` background, ice text, fluid gutter. Wordmark "Exxat" in Inter 700 at 1.25rem, -0.04em, white with the "xx" in brand pink. Document title in mono sky label beside it. Right-aligned text links sit on a 1px `head-line` underline that brightens on hover; no underline on the wordmark.
- The topic bar is sticky, wraps on narrow screens, carries the Previous/Next pills, the "?" and theme buttons, and a 2px brand-pink reading-progress line along its bottom edge.

### Contents list (home)
- Opens with a 2px navy rule and a mono head row (LEARNING PATH · FOLLOW IN ORDER / PARTS). Each row is a grid of 44px number, 16px swatch, title, 100px part count and 20px arrow, 15px vertical padding, 1px hairline between rows. A second mono head (REFERENCE) after a 1px rule breaks the list before 09 and 10. On hover, title and arrow take the topic hue and the arrow slides 3px.

### Sheet header (topic)
- 120px margin column holds the crumb: a 10px topic swatch before "Sheet 02" in pink mono, then the group name in slate mono. Title in Headline, blurb in Lede, closed by a 2px navy rule.

### Parts list and rail
- **Parts list:** opens with a 2px rule and an "IN THIS TOPIC" label; auto-fill 240px columns; each part is a mono two-digit counter in pink at the left with the title in Inter 500 at 0.92rem, a 1px hairline under each item; hover takes the topic hue.
- **Rail (1200px+):** sticky at 76px under the bar, in the 120px margin column. A 1px hairline runs vertically through 11px circular marks. At rest a mark is an empty circle with a hairline border and the item text is slate 0.82rem 500. Passed parts fill the mark with slate (`done`). The current part fills the mark with the topic hue, wears a 3px sheet gap and 1px topic ring, and sets the text to ink 600 (`on`). Hover tints text and mark border with the topic hue.
- **Part:** opened by a 1px navy rule with 48px above, a pink mono crumb (PART 1 OF 12), then the Title.
- **Next part:** a ruled row (1px navy above) with a pink mono "NEXT PART" kicker, the title in 600, and a slate arrow that slides 4px and takes the topic hue on hover.

### Steps
- Ordered list without bullets; a 1px hairline above the list and under every step; each step indented 48px with a two-digit mono counter in the topic hue at the left. Steps at a glance is a `details` block whose summary is a Subtitle with a mono SHOW/HIDE label and a chevron that rotates 90° over 250ms; its list fades in over 250ms.

### Callouts
- No box. A 1px left hairline in the callout colour, 18px of inset, a 20px masked SVG icon in the same colour, a mono uppercase label (INFO, WARNING, TIP, REQUIRED) and the text at 0.97rem, max 72ch. Variants: info (blue, default), warn (amber), tip (green), req (violet).

### Figures
- The image sits inside a 1px hairline border with 3px radius on a white ground, zoom-in cursor, border darkening to slate on hover. The caption is slate 0.86rem with an automatic "Figure N." counter per topic. Figures size to their content. Clicking opens the lightbox: a 90% navy scrim, the image on white, a mono sky count at the top, round ghost arrows and a close button, 200ms fade.

### Tables
- Wrapped in a horizontal scroller that opens with a 2px navy rule and closes with a 1px hairline. Headers are mono 0.76rem uppercase slate over a 2px-equivalent navy rule; cells are 0.93rem with 10px/14px padding and 1px hairlines; the last row has no rule. Row hover washes the row in `tint-blue`. No vertical rules, no outer box.

### Do/Don't pairs
- Two columns, each opened by a 2px rule in green (Do) or red (Don't) with its heading in the same colour. Stack under 620px.

### Inputs (Feature ID checker)
- Opened by a 2px rule with a 600 label above; the input is 10px 12px on `sheet-surface` with a 1px slate border and 4px radius. Focus thickens to navy with a 1px inset ring; error turns border and ring red. The message line beneath is green for pass and red for fail.

### Code panel
- A navy sheet (`panel-navy`) with ice text, 4px radius and a 1px `head-line` border. A toolbar row with a mono filename tab, a sky mono meta label and ghost pill buttons (Copy, Download), separated by a 1px line. Lines in Mono 0.82rem/1.6 with right-aligned muted line numbers (#4f6f8a) in a 48px gutter; keywords sky, strings pale pink (#ffd1e6), numbers pale blue (#cbebff). Capped at 420px with a "Show more" ghost line button; expands fully. Line hover is a 6% sky wash.

### Workflows and tiles
- Workflow cards, control tiles, notification tiles and glossary entries share one form: a 1px hairline above, 14–16px vertical padding, a mono number or label in the topic hue, a 600 title, slate description, no box. Workflow chains and flows are mono 0.82rem steps separated by slate arrows, ruled above and below. The download row opens with a 2px rule and closes with a hairline, with the outline download pill on the right.

### Footer
- Same navy as the head, 48px padding, 48px clear above. Wordmark at 1.5rem, the guide title in ice 600, a mono sky revision line, and underlined ice links on the right whose underline turns brand pink on hover.

### Intro splash
- Full-screen navy with the wordmark at clamp(5rem, 22vw, 13rem), letters rising in sequence (550ms each, 90ms stagger), a 2px brand-pink sweep line growing to min(560px, 70vw), and a mono sky tagline fading in at 1s. Dismisses on click or at 2.6s with a 600ms fade. Home only, skipped under reduced motion.

## Do's and Don'ts

### Do:
- **Do** open every group (sheet header, contents, parts list, table, tool, glossary, download row) with a 2px navy rule and separate its rows with 1px hairlines.
- **Do** set every number, ID, URL, key, count and uppercase label in JetBrains Mono with tabular numerals, two-digit counters with a leading zero.
- **Do** keep pink to mono numbers and labels plus one filled primary pill per sheet.
- **Do** carry a topic's hue only as the 10px square swatch, the rail's current mark, in-topic counters and hover colour.
- **Do** keep hover and state changes to 200–250ms on `cubic-bezier(.2,.7,.2,1)` and entrances to a 250ms fade on `cubic-bezier(.16,1,.3,1)`; cross-fade the theme over 400ms; disable all of it under `prefers-reduced-motion`.
- **Do** keep dark mode the same sheet on navy: identical rules, weights and positions, pink lifted to `dark-pink` with navy type on the fill.
- **Do** cap prose at 72ch, the topic column at 1060px and the page at 1500px.

### Don't:
- **Don't** put content in a card, panel or bordered container on the sheet; the code panel and the two navy bands are the only coloured fields.
- **Don't** use drop shadows, hover lift, glows, drifting orbs, gradient or shimmering text, or blurred backdrops.
- **Don't** reintroduce floating chips, tilted mock-ups, icon tiles, pill badges, the wave divider or the bento grid.
- **Don't** colour a heading, paragraph or surface with pink or a topic hue; they index and mark, they do not fill.
- **Don't** add a second filled pink pill to a sheet or let pink carry running text.
- **Don't** replace masked line icons in callouts with glyph or emoji icons, or add icons to tiles and rows beyond the arrow.
- **Don't** introduce a third rule weight, a vertical table rule or an outer table border.
