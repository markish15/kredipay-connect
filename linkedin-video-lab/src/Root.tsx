import React from "react";
import { Composition } from "remotion";
import { VIDEO } from "./config";
import { LinkedInDemo } from "./LinkedInDemo";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id={VIDEO.id}
      component={LinkedInDemo}
      durationInFrames={VIDEO.durationInFrames}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  );
};
