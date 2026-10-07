import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";
import { FONT, WEIGHT } from "../config";

/** Loads the two bundled Inter Tight weights; Remotion waits until both are ready. */
export const loadBrandFonts = () =>
  Promise.all(
    ([WEIGHT.regular, WEIGHT.medium] as const).map((weight) =>
      loadFont({
        family: "Inter Tight",
        url: staticFile(FONT.files[weight]),
        weight: String(weight),
      }),
    ),
  );
