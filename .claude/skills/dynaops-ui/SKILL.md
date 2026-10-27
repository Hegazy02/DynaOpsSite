---
name: dynaops-ui
description: Styling conventions for the DynaOps365 website in this repo - the Figma-derived Tailwind v4 tokens, type-role utilities, component recipes and English/Arabic switching. Use this whenever you create or edit any Angular component, page, section, layout or template in this project, convert a Figma frame or Dev Mode snippet into code, pick colours, spacing, typography, radii or shadows, add buttons, inputs, badges or cards, or touch RTL/Arabic layout. Load it even when the request never mentions styling, such as "build the hero", "add a pricing section" or "make a contact form", because every visual decision here must go through the token system.
license: MIT
metadata:
  author: Dyna Systems
  version: '1.0'
---

# DynaOps365 UI conventions

The site's visual system is generated from the Figma design system
(`DynaOps365 Website → Design System`, node `8021-2`). Every colour, size, radius and
shadow in Figma already exists as a Tailwind utility or CSS variable in this repo, so
new components should never introduce a raw value. The system is deliberately
restrictive: the default Tailwind palette is removed, the `text-*` scale is replaced
with Figma's, and there is no dark mode. Working inside those limits is what keeps the
site matching the design file as it grows.

Load `angular-developer` alongside this skill for Angular specifics (signals, control
flow, SSR). This skill only covers how things look.

## Where things live

| File | What it holds |
| --- | --- |
| `src/styles/tokens.css` | Figma variables as CSS custom properties. Names match Figma 1:1. EN/AR line heights and families switch on `:lang()`. |
| `src/styles/theme.css` | `@theme` mapping tokens to utilities, plus `container-page`. |
| `src/styles/typography.css` | Type-role utilities (`text-h1`, `text-body-md`, ...). |
| `src/styles/components.css` | `.btn`, `.input`, `.badge`, `.card` recipes. |
| `src/styles/README.md` | Full Figma → variable → utility table and known deviations. |

Read `README.md` when you need the complete token list; the rules below cover day-to-day
work.

## Rules, and why they exist

**Use semantic utilities, not primitives or raw values.** Write `bg-surface`,
`text-fg-secondary`, `border-line`, `bg-action`, not `bg-neutral-0`, `text-[#4e555f]` or
`border-[var(--border-default)]`. The semantic layer is what the designer reasons in, and
it is the one place a future theme change would happen. Reach for a primitive such as
`bg-brand-100` only when the design explicitly uses a ramp step for decoration.

**Never write arbitrary values for things that have tokens.** `text-[14px]`,
`rounded-[10px]`, `p-[24px]`, `shadow-[0_8px_24px_...]` and hex colours all have a
utility already (`text-xs`, `rounded-md`, `p-6`, `shadow-md`). If something in a design
genuinely has no token, add the token to `tokens.css` and `theme.css`, update the README
table, and mention it in your summary. An arbitrary value hides the gap; a token closes it.

**Typography goes through roles.** Use `text-display-lg`, `text-display-md`, `text-h1`
to `text-h4`, `text-body-lg/md/sm`, `text-label-md/sm`, `text-caption`, `text-eyebrow`.
Each role bundles size, weight, tracking and, crucially, the Arabic line height, which
differs from the English one. Composing `text-xl font-semibold leading-tight` by hand
loses that and breaks Arabic pages. Two traps: `text-sm` is 16px here (Figma's names),
and `text-base` does not exist.

**Spacing is the default Tailwind scale.** Figma's `space/N` is N pixels; divide by 4
for the utility: `space/8` → `2`, `space/24` → `6`, `space/96` → `24`.

**Components start from the recipes.** `.btn .btn-md .btn-primary`, `.input`,
`.badge .badge-success`, `.card .card-raised`. Extend them with utilities (`w-full`,
`mt-6`) rather than rebuilding them from scratch, so a change to the recipe reaches every
instance. Sizes: `btn-sm` 32px, `btn-md` 48px, `btn-lg` 56px; inputs are 44px.

**Layout is bidirectional from day one.** The site ships in English and Arabic, so use
logical properties only: `ps-4` not `pl-4`, `ms-auto` not `ml-auto`, `text-start` not
`text-left`, `start-0` not `left-0`, `rounded-s-lg` not `rounded-l-lg`. Use `rtl:` only
for things that cannot be expressed logically, such as flipping a directional icon with
`rtl:-scale-x-100`. Wrap page sections in `container-page`; cap inner content with
`max-w-content`.

**Language is set on the document, not on components.** `<html lang="ar" dir="rtl">`
switches the family and every role's metrics. Never set `font-arabic` or `font-latin` on
a component unless it deliberately shows the other language inside a page; in that case
put `lang` on the wrapper and the base styles handle the rest.

**No dark mode.** Do not add `dark:` classes or dark colour variants; the project ships
light only. The Figma file has a dark mode, but it is intentionally not implemented.

**Keep the focus ring.** The base layer draws a 2px brand outline on `:focus-visible`.
Do not add `outline-none` to interactive elements; the `.input` recipe already replaces
the outline with its own border treatment.

## Elevation and radius guide

| Use | Radius | Shadow |
| --- | --- | --- |
| Small buttons, chips | `rounded-sm` (6) | none |
| Inputs, medium buttons | `rounded-md` (10) | `shadow-xs` if lifted |
| Cards, large buttons, panels | `rounded-lg` (16) | `shadow-sm` at rest, `shadow-md` raised |
| Hero media, large containers | `rounded-xl` (24) | `shadow-md` |
| Dropdowns, popovers | `rounded-lg` | `shadow-md` |
| Modals, dialogs | `rounded-xl` | `shadow-lg` |
| Pills, avatars, badges | `rounded-full` | none |

## Converting Figma Dev Mode output

`get_design_context` returns React + Tailwind with Figma variables inlined. Translate it
with this table instead of pasting it. The CSS variables would technically resolve, but
the arbitrary-value classes bypass the semantic layer and bloat every template.

| Figma emits | Write |
| --- | --- |
| `text-[color:var(--text-primary,...)]` / `secondary` / `tertiary` / `brand` / `on-brand` / `inverse` | `text-fg` / `text-fg-secondary` / `text-fg-tertiary` / `text-fg-brand` / `text-fg-on-brand` / `text-fg-inverse` |
| `bg-[var(--bg-canvas,...)]` / `surface` / `subtle` / `inverse` / `brand` / `brand-subtle` | `bg-canvas` / `bg-surface` / `bg-subtle` / `bg-inverse` / `bg-brand` / `bg-brand-subtle` |
| `bg-[var(--action-primary,...)]` (+ hover, pressed) | `bg-action hover:bg-action-hover active:bg-action-pressed` |
| `bg-[var(--action-secondary,...)]` (+ hover) | `bg-action-secondary hover:bg-action-secondary-hover` |
| `border-[var(--border-default,...)]` / `subtle` / `strong` / `brand` | `border-line` / `border-line-subtle` / `border-line-strong` / `border-line-brand` |
| `bg-[var(--status-success-subtle,...)]`, `text-[color:var(--status-success,...)]` (same for warning, error) | `bg-success-subtle`, `text-success` |
| `border-[length:var(--border-hairline,1px)]` / `border-thick` | `border` / `border-2` |
| `rounded-[var(--radius-sm,6px)]` / `md` / `lg` / `xl` / `full` | `rounded-sm` / `rounded-md` / `rounded-lg` / `rounded-xl` / `rounded-full` |
| `px-[var(--space-16,16px)]`, `gap-[24px]`, `gap-[16px_12px]` | `px-4`, `gap-6`, `gap-y-4 gap-x-3` |
| `shadow-[0px_8px_24px_0px_var(--shadow\/md,...)]` or `drop-shadow-[... --shadow\/md ...]` | `shadow-md` (likewise xs, sm, lg) |
| `font-['Montserrat:SemiBold'] text-[length:var(--font-size-4xl,56px)] leading-[60px] tracking-[-1.5px]` | `text-display-lg` |
| `...SemiBold ... font-size-3xl ... leading-[1.2]` | `text-display-md` |
| `...SemiBold ... font-size-2xl` / `xl` / `lg leading-[30px]` / `md leading-[26px]` | `text-h1` / `text-h2` / `text-h3` / `text-h4` |
| `...Regular ... font-size-md leading-[1.2]` / `sm leading-[1.4]` / `xs leading-[1.4]` | `text-body-lg` / `text-body-md` / `text-body-sm` |
| `...Medium ... font-size-xs leading-[20px]` / `2xs leading-[16px]` | `text-label-md` / `text-label-sm` |
| `...Regular ... font-size-2xs leading-[18px]` / `...SemiBold ... 2xs leading-[16px]` | `text-caption` / `text-eyebrow` |
| `font-["IBM_Plex_Sans_Arabic:..."]` variants | the same role; drop the family class entirely |
| A Figma Button / Input / Badge / Card instance | the recipe classes, not the expanded utilities |

Drop Figma's structural noise: `content-stretch`, `shrink-0`, `relative`, `min-w-px`,
`[word-break:break-word]`, `data-node-id`, and fixed `w-[320px]`/`h-[10px]` boxes.
Rebuild the layout with flex/grid and responsive utilities; the screenshot is the target,
not the absolute geometry. Download any image or SVG asset into `public/` and reference it
by root-relative path; never leave a `figma.com/api/mcp/asset` URL in code.

## Component pattern

Standalone, `OnPush`, signal inputs, recipe classes applied in the template, host gets a
display class so the component participates in layout:

```ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <article class="card h-full" [class.card-raised]="raised()">
      <p class="text-eyebrow text-fg-tertiary">{{ eyebrow() }}</p>
      <h3 class="text-h4">{{ title() }}</h3>
      <p class="text-body-sm text-fg-secondary">{{ body() }}</p>
      <a class="btn btn-sm btn-ghost mt-auto self-start" [href]="href()">
        {{ cta() }}
      </a>
    </article>
  `,
})
export class FeatureCard {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly body = input.required<string>();
  readonly href = input('#');
  readonly cta = input('Learn more');
  readonly raised = input(false);
}
```

Nothing in that template is specific to English: switch the document to `lang="ar"
dir="rtl"` and it renders correctly with Arabic metrics because every class is a role or a
semantic token.

## Before you finish

- No hex colours, no `[...]` sizes or colours, no `text-base`, no default-palette names.
- Headings and copy use role utilities; nothing composes size + leading + weight by hand.
- Only logical spacing and alignment utilities (`ps-`, `ms-`, `text-start`, `start-`).
- Buttons, inputs, badges and cards use the recipes.
- Sections use `container-page`; no component sets its own font family.
- No `dark:` classes.
- Check the result once with `lang="ar" dir="rtl"` on `<html>` (temporarily in
  `src/index.html` or via devtools). Text should not clip and nothing should be pinned to
  the wrong side.
- `npm run build` passes with no CSS warnings.

## Extending the system

When a design needs something new, extend the layers in order and keep the README table
current: a new colour goes in `tokens.css` (semantic name, light value) and `theme.css`
(`--color-*` mapping); a new text style becomes an `@utility text-<role>` in
`typography.css` with EN and AR line heights in `tokens.css`; a new repeated pattern
becomes a recipe in `components.css` under `@layer components`. If the token is also
missing in Figma, say so, since the design file is the source of truth.
