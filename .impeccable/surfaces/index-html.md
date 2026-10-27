---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["css/styles.css","js/main.js"]
---

# Surface: the guide (index.html, home and every topic)

Mode: Read. Scope: the whole site, home page plus all ten topic pages, callouts, tables, figures, code panels, workflows, glossary, footer, light and dark.

Audience and job: Exxat's form-configuration team. New joiners follow the numbered learning path in order; the configuration team opens one topic and finds a setting; reviewers check a configured form against it. Read on a desktop beside the Form Builder.

Action: pick a topic (home), then read parts in order and move to the next part or topic. Proof and content: real Form Builder screenshots, field-by-field tables, numbered steps, six tested workflows, JSON templates, glossary.

Constraints: plain HTML/CSS/JS, no build step, works from disk and with JavaScript off. Keep the light/dark toggle, per-topic colour coding, the animated intro splash, keyboard shortcuts, the parts rail, Next part links, collapsible glance boxes and lightbox arrows. Remove for good: glows, orbs, gradient and shimmering text, floating chips, tilted mock-ups, icon tiles, pill badges, hover-lift shadows, the wave divider, the bento grid. The hero mock is not required.

Memorable moment: the home page is a contents sheet, not a card grid; every topic page carries its number in the margin and its parts pinned to one ruled line.

## Direction contract

THESIS: Every Form Builder setting is a parameter, so the guide is set as the form's specification sheet: numbered, ruled, flat, nothing boxed. It refuses the category default of a dark hero over a bento of icon cards.

OWN-WORLD: Warm off-white sheet (#f6f2f0) with a deep navy running head (#041c2c) and pale-blue text on it (#edf7fd, #99d2ff). Exxat pink (#e31c79) does exactly two jobs: section and figure numbers in a mono face, and the one primary pill. Hairline navy rules group everything; depth is rule weight only, no shadows, no containers. Inter for display and reading, JetBrains Mono for numbers, IDs and labels. Per-topic colour survives as a small square swatch and the struck mark on the rail. Dark mode inverts the sheet to navy and keeps the same rules. Raises: no boxes (from cathode gauze); depth by rule weight only (from noir); one continuous ruled rail with parts pinned (from daylight section); done and current as marks, not only colour (from cutting bench).

STORY: A reader sees at once that this is Exxat's own manual, finds their topic by number in a contents list, and reads a calm column with figures and tables set in the standard forms, always knowing which sheet and part they are on and what comes next.

FIRST VIEWPORT: 52px navy running head: wordmark left, "FORM CONFIGURATION GUIDE · EVAL CONFIGURATION TOOL" in mono, Open the Form Builder and the theme toggle right. Below, a three-column sheet: a 120px margin column of mono labels (SHEET 00, CONTENTS, REV), a 520px title block (64px title, lede, pink pill "Start with 01 Overview →", outline pill, then a ruled meta row), and the contents list filling the right: ten numbered rows under a 2px navy rule, hairlines between, number in pink mono, topic swatch, title with one-line description, part count in mono, arrow; a REFERENCE bracket before 09 and 10. Primary action: the pink pill in the title block.

FORM: Specification sheet, candidate 7 of 7 on the ordered grounded list (ranked below Exxat bulletin, paper evaluation rubric, SOP binder with index tabs, academic bulletin, rotation timetable, hospital wayfinding). seed:be53ed523b30397c

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Signature interaction: the parts rail is one continuous ruled line; as the reader scrolls, the current part's mark strikes forward in the topic colour and passed parts take a filled mark. Motion grammar: short, settled, 200ms ease-out; the intro splash is the only entrance animation; nothing loops.
