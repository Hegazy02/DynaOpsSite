# DynaOps365 styles

Tailwind v4 (CSS-first) configuration generated from the Figma design system
([DynaOps365 Website → Design System](https://www.figma.com/design/PMrpOG7kirRGVTrhdQ55ju/DynaOps365-Website?node-id=8021-2)).

| File | Purpose |
| --- | --- |
| `tokens.css` | Figma variables as CSS custom properties: primitives, semantic colours (Figma Light mode), EN/AR type metrics. Names match Figma 1:1, so Dev Mode code such as `var(--text-primary, #14171a)` works as-is. |
| `theme.css` | `@theme` block mapping tokens to Tailwind utilities and the `container-page` utility. |
| `base.css` | Element defaults (font, canvas background, focus ring, selection). |
| `typography.css` | Type-role utilities (`text-h1`, `text-body-md`, …). |
| `components.css` | `.btn`, `.input`, `.badge`, `.card` recipes from the Components section. |

## Modes

- **Colour**: light only. The Figma file also defines a Dark mode for the same semantic
  tokens; it is intentionally not shipped. Because every utility goes through the semantic
  layer, adding it later means one extra block of variable overrides in `tokens.css`.
- **Arabic**: `<html lang="ar" dir="rtl">`. Family switches to IBM Plex Sans Arabic and every
  role picks up its Arabic line-height; tracking resets to 0. `lang="ar"` on a subtree works
  for mixed-language pages. Use Tailwind's `rtl:` / `ltr:` variants and logical properties
  (`ps-4`, `ms-auto`, `text-start`) for layout.

## Token → utility map

| Figma | CSS variable | Tailwind |
| --- | --- | --- |
| `bg/canvas`, `bg/surface`, `bg/subtle`, `bg/inverse` | `--bg-canvas` … | `bg-canvas`, `bg-surface`, `bg-subtle`, `bg-inverse` |
| `bg/brand`, `bg/brand-subtle` | `--bg-brand`, `--bg-brand-subtle` | `bg-brand`, `bg-brand-subtle` |
| `text/primary`, `text/secondary`, `text/tertiary` | `--text-primary` … | `text-fg`, `text-fg-secondary`, `text-fg-tertiary` |
| `text/inverse`, `text/brand`, `text/on-brand` | `--text-inverse` … | `text-fg-inverse`, `text-fg-brand`, `text-fg-on-brand` |
| `border/default`, `border/subtle`, `border/strong`, `border/brand` | `--border-default` … | `border-line`, `border-line-subtle`, `border-line-strong`, `border-line-brand` |
| `action/primary`, `-hover`, `-pressed` | `--action-primary` … | `bg-action`, `hover:bg-action-hover`, `active:bg-action-pressed` |
| `action/secondary`, `-hover` | `--action-secondary` … | `bg-action-secondary`, `hover:bg-action-secondary-hover` |
| `status/success`, `status/success-subtle` (also warning, error) | `--status-success` … | `text-success`, `bg-success-subtle` |
| `brand/50…900`, `neutral/0…950` | `--brand-500`, `--neutral-900` | `bg-brand-500`, `text-neutral-900` |
| `font-size/2xs…4xl` (12 14 16 18 22 28 36 44 56) | `--font-size-md` | `text-2xs` … `text-4xl` |
| `space/2…96` | `--space-16` | default spacing scale (`p-4` = 16px, `gap-6` = 24px, `py-24` = 96px) |
| `radius/sm md lg xl full` (6 10 16 24 pill) | `--radius-md` | `rounded-sm` `rounded-md` `rounded-lg` `rounded-xl` `rounded-full` |
| `Shadow/xs sm md lg` | `--shadow-md` | `shadow-xs` `shadow-sm` `shadow-md` `shadow-lg` |
| `border/hairline`, `border/thick` | `--border-hairline`, `--border-thick` | `border`, `border-2` |
| Text styles `EN/*` and `AR/*` | — | `text-display-lg` `text-display-md` `text-h1` … `text-h4` `text-body-lg/md/sm` `text-label-md/sm` `text-caption` `text-eyebrow` |

The default Tailwind colour palette is intentionally removed (`bg-blue-500` will not compile),
and the `text-*` size scale is replaced with the Figma one, so `text-sm` is 16px here.

## Icons

Figma exports live in `public/icons/` and are served at `/icons/...`:

- `shared/`: 17 icons used on two or more pages (nav chevron, arrows, globe, and the
  contact and social icons at 28px and 60px).
- `landing-page/`, `features/`, `about-us/`, `industries/`, `blog/`: icons used on one
  page only.

Single-colour icons use `stroke="currentColor"` (or `fill="currentColor"`), so the colour
comes from the surrounding text colour (`text-fg`, `text-fg-brand`, `text-fg-on-brand`)
and follows hover and state changes. That is also why one shared file replaces the dark,
white and blue copies Figma exported per page. Render them inline (template markup or an
icon component), not through `<img src>`, where `currentColor` falls back to black. Size
with `size-*` utilities (`size-4` = 16px, `size-4.5` = 18px); every file has a `viewBox`,
and the width/height attributes are only Figma's default export size.

One icon keeps its original colour: `about-us/sparkles.svg` is drawn in `#5BE396`, a green
that is not part of the palette, so it stays hard-coded until the designer decides whether
that accent becomes a token. Directional arrows flip under RTL with `rtl:-scale-x-100`.

Source of the exports: `C:\Users\Hegazy\Desktop\dyna_site_icons` (Hugeicons names, one
export folder per page).

## Deviations worth knowing

- Button heights are fixed at 32 / 48 / 56 px. Figma's `lg` resolves to 57.6 px because of
  its 1.2 line-height; 56 keeps the 4 px grid and makes EN and AR buttons the same height.
- Input height is fixed at 44 px (Figma: 43.6 px EN, 46 px AR).
- Secondary button hover adds the `action/secondary-hover` fill alongside the brand border
  Figma shows, since the token exists for exactly that state.
- The typography frames are labelled "Inter" and "Cairo", but every text style in the file
  uses Montserrat and IBM Plex Sans Arabic. The code follows the styles.
