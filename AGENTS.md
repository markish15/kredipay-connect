# AGENTS.md

## Rules

- Site typography is driven by the `sans` and `heading` stacks in `tailwind.config.ts` plus the `@font-face` block in `src/index.css`. Never hardcode a `font-family` in a component; change those two places only, so every page follows.
- Century Gothic is a licensed Monotype font we may not redistribute, so it is only ever referenced with `local()` sources and a free geometric web fallback (Jost). Never download or commit Century Gothic font files; if the user later provides a web license, self-host their files instead.
