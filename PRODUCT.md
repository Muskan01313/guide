# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Exxat's form-configuration team. Three confirmed audiences:

- **New joiners** learning to build evaluation forms in the Exxat Form Builder (Eval Configuration Tool). They follow the numbered learning path on the home page in order, Overview through Terms, before working on live forms.
- **The configuration team** using the guide as a day-to-day reference: open one topic, find a setting, field value or naming rule in seconds.
- **Reviewers and leads** using it as the agreed standard when checking a configured form.

All are Exxat staff. The guide is internal training material, not customer-facing marketing.

## Product Purpose

Put the whole form-configuration process in one place so that onboarding is faster, the team has one reference, configuration mistakes drop, and everyone follows the same steps, naming rules and tested workflows. Success: a new joiner can learn the process at their own pace without shadowing, and an experienced configurer can confirm a detail without asking around.

## Positioning

The only written, ordered account of how Exxat's own team configures forms in the Form Builder, with real screenshots from the tool and the team's tested workflows. Nothing else documents this; before the guide the knowledge lived in scattered notes and in people's heads.

## Operating Context

- Read alongside the Form Builder itself (`lam-evaluation-config-ui.mfe.exxat.com`), usually on a desktop, while configuring a form.
- Ten topics: Overview, Create a new form, Control types, Instance-based forms, Multi response forms, Multi-preceptor forms, Notifications, Terms, Tested workflows, Glossary.
- Each topic opens with a "Steps at a glance" list, then detailed parts with numbered steps, field-by-field tables, checklists, callouts (info, warning, tip, required) and numbered figures that open in a lightbox.
- JSON templates and the tested-workflows Word file are offered as copy and download.
- A built-in Feature ID checker flags characters that are not allowed.
- Published by GitHub Pages from `main`; also opens from disk with no server.

## Capabilities and Constraints

- Plain HTML, CSS and JavaScript, no build step. One `index.html` holds every topic; `css/styles.css` holds all styling; `js/main.js` handles hash routing, theme toggle, lightbox, code panels and the Feature ID checker.
- Must work with JavaScript disabled: the `#topic` hash decides which topic is shown.
- Must keep: the light/dark mode toggle (remembers the choice), per-topic colour coding, the animated intro splash, keyboard shortcuts, the parts timeline beside topic content, "Next part" links, collapsible glance boxes and lightbox arrows.
- Works on desktop, tablet and phone.
- Terminology is the Form Builder's own: Feature ID, sections, layouts, workflows, instances, notifications, terms, MultipleResponse, isMultiResponse, RecordSummary, fusion templates.

## Brand Commitments

- Exxat brand. The 2026-10-27 redesign is pinned to the colour pattern of exxat.com: deep navy (#041c2c, #163a5e, #004b87), Exxat pink (#e31c79), pale blue on dark (#edf7fd), light-blue tints (#cbebff, #99d2ff) and warm off-white (#f6f2f0). "More modern" than the incumbent, with the decorative devices listed below removed.
- The user named these as unwanted and they must not return: glows, drifting orbs, gradient or shimmering text; floating chips and tilted mock-ups; generic card chrome (icon tiles, pill badges, hover-lift shadows, wave divider, bento grid).
- The hero's illustrated form-builder mock is not required to stay.
- Guide created and maintained by Muskan Sharma.

## Evidence on Hand

- Real Form Builder screenshots in `assets/img/`, named by topic (`create-form-01.png`, `notifications-03.png`, …), with numbered figure captions in `index.html`.
- JSON templates and the tested-workflows Word file in `assets/downloads/`.
- Six tested workflows with their steps and buttons, written up in the Tested workflows topic.
- No testimonials, metrics or customer claims exist and none should be invented.

## Product Principles

- One ordered path for learners, instant lookup for everyone else.
- Call out mistakes where they happen, not in a separate list.
- Show the real tool: screenshots and exact field values over paraphrase.
- Keep it dependency-free so it opens anywhere, including offline.
- It is Exxat's guide: it should look like it belongs beside exxat.com and the Form Builder.
