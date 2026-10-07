/**
 * KredibilityPay — LinkedIn brand film design system.
 *
 * Every colour, type size, grid value, timing beat and data point used by the
 * composition lives here. All timings are GLOBAL frames (30 fps) so that
 * objects handed from one scene to the next share one clock.
 */

// ---------------------------------------------------------------------------
// Format
// ---------------------------------------------------------------------------

export const VIDEO = {
  id: "LinkedInDemo",
  width: 1080,
  height: 1350,
  fps: 30,
  durationInFrames: 600,
} as const;

// ---------------------------------------------------------------------------
// Colour — derived from the KredibilityPay logo (#38BFBE / #424242) and the
// brand palette sheet (Rich black #070D20, Charcoal #485362, Snow #F7F0F0,
// Light sea green #17A09E).
// ---------------------------------------------------------------------------

export const COLORS = {
  background: "#F6F3F1",
  surface: "#FFFFFF",
  ink: "#070D20",
  inkSoft: "#485362",
  muted: "#8B929D",
  hairline: "rgba(7, 13, 32, 0.08)",
  guide: "rgba(7, 13, 32, 0.09)",
  line: "rgba(7, 13, 32, 0.2)",
  /** Stream colour once a market is carrying volume. */
  lineCharged: "rgba(56, 191, 190, 0.9)",
  accent: "#38BFBE",
  accentDeep: "#17A09E",
  accentSoft: "rgba(56, 191, 190, 0.28)",
  logoDivider: "#424242",
} as const;

export const SHADOWS = {
  chip: "0 1px 2px rgba(7, 13, 32, 0.05), 0 8px 24px -10px rgba(7, 13, 32, 0.14)",
  panel:
    "0 1px 2px rgba(7, 13, 32, 0.04), 0 16px 40px -12px rgba(7, 13, 32, 0.10), 0 48px 96px -32px rgba(7, 13, 32, 0.16)",
} as const;

// ---------------------------------------------------------------------------
// Typography — one family (Inter Tight, bundled locally), two weights.
// ---------------------------------------------------------------------------

export const FONT = {
  family: '"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',
  files: {
    400: "fonts/inter-tight-latin-400-normal.woff2",
    500: "fonts/inter-tight-latin-500-normal.woff2",
  },
} as const;

export const WEIGHT = { regular: 400, medium: 500 } as const;

type TextStyleToken = {
  size: number;
  lineHeight: number;
  tracking: string;
  weight: number;
};

export const TYPE: Record<
  "display" | "headline" | "tagline" | "uiTitle" | "uiBody" | "uiMeta" | "url",
  TextStyleToken
> = {
  display: { size: 116, lineHeight: 1.0, tracking: "-0.045em", weight: WEIGHT.medium },
  headline: { size: 72, lineHeight: 1.06, tracking: "-0.035em", weight: WEIGHT.medium },
  tagline: { size: 56, lineHeight: 1.1, tracking: "-0.03em", weight: WEIGHT.medium },
  uiTitle: { size: 34, lineHeight: 1.2, tracking: "-0.015em", weight: WEIGHT.medium },
  uiBody: { size: 28, lineHeight: 1.2, tracking: "-0.01em", weight: WEIGHT.medium },
  uiMeta: { size: 26, lineHeight: 1.2, tracking: "-0.005em", weight: WEIGHT.regular },
  url: { size: 26, lineHeight: 1.2, tracking: "0.01em", weight: WEIGHT.regular },
};

// ---------------------------------------------------------------------------
// Spacing & grid
// ---------------------------------------------------------------------------

export const SPACE = { xxs: 4, xs: 8, s: 16, m: 24, l: 32, xl: 48, xxl: 72, xxxl: 96 } as const;

const MARGIN = 96;

export const GRID = {
  margin: MARGIN,
  left: MARGIN,
  right: VIDEO.width - MARGIN,
  contentWidth: VIDEO.width - MARGIN * 2,
  centerX: VIDEO.width / 2,
  /** Vertical column guides (4-column grid across the content area). */
  guides: [96, 318, 540, 762, 984],
  /** Top of the headline slot shared by scenes 3 and 4. */
  headlineTop: 132,
  /** Top of the large opening headline. */
  displayTop: 212,
} as const;

// ---------------------------------------------------------------------------
// Scene windows (requested pacing) + overlap windows used for mounting.
// ---------------------------------------------------------------------------

export const SCENES = {
  intro: { from: 0, duration: 90 },
  network: { from: 90, duration: 150 },
  dashboard: { from: 240, duration: 150 },
  consolidation: { from: 390, duration: 120 },
  end: { from: 510, duration: 90 },
} as const;

/**
 * Frames at which a continuous object passes from one scene component to the
 * next. On a handoff frame both scenes describe the object identically.
 */
export const HANDOFF = {
  nodesToRows: 214,
  rowsToSources: 420,
  integrationToLogo: 506,
} as const;

/** Mount windows — scenes overlap so objects can transform across cuts. */
export const MOUNT = {
  intro: { from: 0, to: 104 },
  network: { from: 0, to: 244 },
  dashboard: { from: HANDOFF.nodesToRows, to: 432 },
  consolidation: { from: 386, to: 544 },
  end: { from: HANDOFF.integrationToLogo, to: VIDEO.durationInFrames },
} as const;

// ---------------------------------------------------------------------------
// Timing beats (global frames)
// ---------------------------------------------------------------------------

export const TIMING = {
  guides: { fadeOutStart: 500, fadeOutDuration: 30 },

  intro: {
    headlineIn: 6,
    headlineExit: 74,
    /** Markers are already on screen at frame 0 and settle in. */
    markersIn: 0,
    markerStagger: 3,
    markerStartOpacity: 0.75,
  },

  camera: {
    driftStart: 0,
    driftDuration: 100,
    pushStart: 80,
    pushDuration: 54,
  },

  network: {
    unfoldStart: 100,
    unfoldStagger: 4,
    unfoldDuration: 26,
    edgesStart: 122,
    edgeStagger: 5,
    edgeDuration: 26,
    particlesStart: 146,
    particlesEnd: 196,
    hubIn: 172,
    spokesStart: 178,
    spokeStagger: 3,
    spokeDuration: 22,
    meshFadeStart: 182,
    retractStart: 206,
    retractDuration: 22,
  },

  dashboard: {
    panelGrow: 208,
    panelGrowDuration: 32,
    /** Each node first flies to the row's left edge (flight), then stretches into a row (morph). */
    tokenStart: 216,
    tokenStagger: 4,
    flightDuration: 24,
    morphDuration: 18,
    headlineIn: 246,
    headlineExit: 388,
    statusDelay: 14,
    chromeFadeStart: 392,
    chromeFadeDuration: 26,
    detailFadeStart: 388,
    detailFadeDuration: 18,
  },

  consolidation: {
    streamsStart: 402,
    streamStagger: 4,
    streamDuration: 28,
    integrationStart: 428,
    integrationDuration: 20,
    particleStart: 428,
    particleWaves: 5,
    particleInterval: 7,
    particleTravel: 24,
    particleIntegrationTravel: 12,
    /** Streams turn brand colour as their first transaction lands. */
    chargeStart: 444,
    chargeStagger: 3,
    chargeDuration: 16,
    nodeIn: 446,
    labelIn: 456,
    headlineIn: 454,
    exitStart: 500,
  },

  end: {
    contractStart: 504,
    contractDuration: 16,
    travelStart: 514,
    travelDuration: 24,
    revealStart: 538,
    revealDuration: 26,
    taglineIn: 548,
    urlIn: 562,
    settleStart: 538,
  },
} as const;

// ---------------------------------------------------------------------------
// Copy
// ---------------------------------------------------------------------------

export const COPY = {
  intro: [
    { text: "LATAM payments", tone: "ink" },
    { text: "shouldn’t be", tone: "soft" },
    { text: "complicated.", tone: "soft" },
  ],
  dashboard: [
    { text: "One integration.", tone: "ink" },
    { text: "Local payment methods.", tone: "soft" },
  ],
  consolidation: [{ text: "Expand across LATAM.", tone: "ink" }],
  integrationLabel: "One integration",
  panelTitle: "Payments",
  panelLive: "Live",
  status: "Completed",
  tagline: "Payments built for LATAM.",
  url: "kredibilitypay.com",
} as const;

export type Tone = "ink" | "soft";
export type CopyLine = { text: string; tone: Tone };

// ---------------------------------------------------------------------------
// Markets & payment methods
// Order = top-to-bottom order of the transaction rows (sorted by node height so
// tokens never cross on their way into the dashboard).
// ---------------------------------------------------------------------------

export type Market = {
  id: string;
  country: string;
  currency: string;
  method: string;
  amount: string;
  /** Node anchor in the Scene 2 network (frame coordinates). */
  node: { x: number; y: number };
};

export const MARKETS: Market[] = [
  { id: "mx", country: "Mexico", currency: "MXN", method: "SPEI", amount: "8,450.00", node: { x: 296, y: 360 } },
  { id: "co", country: "Colombia", currency: "COP", method: "PSE", amount: "320,000", node: { x: 596, y: 600 } },
  { id: "br", country: "Brazil", currency: "BRL", method: "PIX", amount: "1,250.00", node: { x: 806, y: 792 } },
  { id: "pe", country: "Peru", currency: "PEN", method: "Yape", amount: "420.00", node: { x: 344, y: 892 } },
  { id: "cl", country: "Chile", currency: "CLP", method: "Webpay", amount: "185,900", node: { x: 566, y: 1140 } },
];

/** Regional mesh, by market id. */
export const EDGES: [string, string][] = [
  ["mx", "co"],
  ["co", "br"],
  ["co", "pe"],
  ["pe", "br"],
  ["pe", "cl"],
  ["br", "cl"],
];

// ---------------------------------------------------------------------------
// Geometry of the continuous objects
// ---------------------------------------------------------------------------

export const NETWORK = {
  hub: { x: 530, y: 760 },
  /** Opening camera: network shown compact, lower right, beneath the headline. */
  camera: { startScale: 0.55, holdScale: 0.58, offsetX: 128, offsetY: 236 },
  dot: 10,
  chip: { width: 276, height: 64, radius: 16, padX: 24, gap: 12 },
  edgeWidth: 1.5,
  spokeWidth: 1.5,
  particleRadius: 4,
} as const;

const PANEL_TOP = 432;
const PANEL_HEADER = 100;
const ROW_HEIGHT = 120;

const ROW_INSET = 20;
/** Row geometry mirrors the chip so a docked node keeps its dot and label column. */
const ROW_DOT_X = NETWORK.chip.padX + NETWORK.dot / 2;
const ROW_TEXT_X = NETWORK.chip.padX + NETWORK.dot + NETWORK.chip.gap;

export const PANEL = {
  x: GRID.left,
  y: PANEL_TOP,
  width: GRID.contentWidth,
  height: PANEL_HEADER + ROW_HEIGHT * MARKETS.length + SPACE.m,
  radius: 24,
  header: PANEL_HEADER,
  /** Header title and row separators align with the row label column. */
  textX: ROW_INSET + ROW_TEXT_X,
  padRight: SPACE.l,
  row: {
    height: ROW_HEIGHT,
    x: GRID.left + ROW_INSET,
    width: GRID.contentWidth - ROW_INSET * 2,
    dotX: ROW_DOT_X,
    textX: ROW_TEXT_X,
    rightPad: SPACE.l - ROW_INSET,
  },
} as const;

export const rowCenterY = (index: number) =>
  PANEL.y + PANEL.header + PANEL.row.height * index + PANEL.row.height / 2;

export const CONSOLIDATION = {
  streamStartX: 384,
  convergence: { x: 712, y: rowCenterY(2) },
  endpoint: { x: 932, y: rowCenterY(2) },
  streamWidth: 2,
  integrationWidth: 4,
  endpointRadius: 12,
} as const;

/**
 * Official horizontal lockup (public/assets/kredibilitypay-logo-full.svg).
 * Geometry is read from the SVG so the integration line can land exactly on
 * the lockup's own divider rule.
 */
export const LOGO = {
  src: "assets/kredibilitypay-logo-full.svg",
  viewBox: { x: 20, y: 130, width: 340, height: 95 },
  divider: { x: 127.547, top: 146.231, bottom: 220.306, stroke: 1.5 },
  width: 600,
  /** Optical centring: the artwork sits slightly right inside its viewBox. */
  centerX: GRID.centerX - 13,
  top: 500,
} as const;

export const END = {
  taglineGap: 76,
  urlBottom: 132,
} as const;
