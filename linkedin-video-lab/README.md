# KredibilityPay — LinkedIn brand film

A 20-second, 1080 × 1350 (4:5), 30 fps motion piece built natively in React + Remotion.
Message: **KredibilityPay simplifies accepting local payment methods across Latin America through one integration.**

```bash
npm install
npm run dev      # Remotion Studio → composition "LinkedInDemo"
npm run render   # → out/LinkedInDemo.mp4
npm run still    # → out/LinkedInDemo-endcard.png (final frame)
npm run lint     # eslint + tsc
```

## Story — one continuous object system

| Time | Scene | What happens |
| --- | --- | --- |
| 0–3 s | Opening | "LATAM payments shouldn't be complicated." Five currency markers wait beneath. |
| 3–8 s | Network | Camera pushes in; markers unfold into market nodes, connect into a regional mesh, then re-route to one hub. |
| 8–13 s | Dashboard | The hub opens into a payments panel; each market node docks and stretches into a live transaction row. |
| 13–17 s | Consolidation | Rows shed their detail and become sources; five streams converge into one integration line and turn brand teal. |
| 17–20 s | End card | The line contracts to its endpoint, travels to the logo and becomes the lockup's divider rule; the logo opens from it. |

Objects are handed between scenes on fixed frames (`HANDOFF` in `src/config.ts`); on those frames
both scenes render the object identically, so there are no cuts or cross-fades between scenes.

## Where things live

- `src/config.ts` — the design system: colours (derived from the logo and the brand palette sheet),
  type scale, grid, scene windows, every timing beat (global frames), copy, market/method data, geometry.
- `src/lib/motion.ts` — the house easing curves and progress/spring helpers.
- `src/scenes/*` — one component per scene, mounted in overlapping `<Sequence>`s that share one clock.
- `src/components/*` — `AnimatedText` (masked line reveals), `MarketNode` (marker → node → row),
  `PaymentRow`, `ConnectionLine` (draw/retract paths + particles), `Logo` (official lockup + split reveal).
- `public/assets/kredibilitypay-logo-full.svg` — the official lockup, copied unmodified from `src/assets`.
- `public/fonts/` — Inter Tight 400/500 (SIL OFL, `OFL.txt`), bundled so renders never hit the network.

All motion is deterministic (no randomness, no runtime requests).

### Rendering in a sandbox without Remotion's Chrome download
Pass a local Chromium: `--browser-executable=/path/to/headless_shell`.
