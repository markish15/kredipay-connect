import { useCurrentFrame } from "remotion";
import { MARKETS, NETWORK, TIMING } from "../config";
import { EASE, mix, progress } from "./motion";

/** Scenes are mounted in overlapping <Sequence>s but read one global clock. */
export const useGlobalFrame = (sequenceFrom: number) => useCurrentFrame() + sequenceFrom;

/**
 * Network "camera": in the opening the market markers sit compact beneath the
 * headline; the camera then pushes in until the network fills the frame.
 */
export const networkCamera = (frame: number) => {
  const { camera: cam, hub } = NETWORK;
  const t = TIMING.camera;
  const drift = progress(frame, t.driftStart, t.driftDuration, EASE.soft);
  const push = progress(frame, t.pushStart, t.pushDuration, EASE.inOut);
  const scale = mix(mix(cam.startScale, cam.holdScale, drift), 1, push);
  const ox = mix(cam.offsetX, 0, push);
  const oy = mix(cam.offsetY, 0, push);
  return (p: { x: number; y: number }) => ({
    x: hub.x + (p.x - hub.x) * scale + ox,
    y: hub.y + (p.y - hub.y) * scale + oy,
  });
};

export const marketIndex = (id: string) => MARKETS.findIndex((m) => m.id === id);
