# Project Instructions

- Address the user by name, "Hegazy", in every response.
- Comments: only where necessary and precise, one line (two at most). No multi-line blocks or JSDoc paragraphs, and no comments on obvious code.

## UI and styling

- The visual system (Tailwind v4 tokens generated from Figma) is documented in the `dynaops-ui` skill. Load it before creating or styling any component, page or template, and before converting Figma output to code.
- Use semantic utilities and type roles only: no hex values, no arbitrary `[...]` sizes, no default Tailwind palette, no `dark:` classes. Layout uses logical properties because the site ships in English and Arabic.

## Code organization

- Interfaces, type aliases and enums live in a sibling `<name>.model.ts` file (`footer.model.ts`, `button.model.ts`), never inside component, directive, service or content files. Import them with `import type`.
- A feature page lives in `src/app/features/<area>/<feature>/` with its page component, content and model at the root. Every component that belongs to that page goes under its `components/` folder (`industries/fmcg/components/fmcg-hero/`), one folder per component, named with the feature prefix.
- Components shared by the pages of one area live in `src/app/features/<area>/components/` (`industries/components/industry-features/`), named with the area prefix. Components used across areas live in `src/app/shared/ui/`.

## SEO

- Every new page gets its own meta description from the start: a dedicated `<page>.description` `$localize` key in its content file, with the Arabic translation in `src/locale/ar/`. Keep it to about 155 characters, lead with the benefit and name the page's topic early. Never build it from the hero text.
