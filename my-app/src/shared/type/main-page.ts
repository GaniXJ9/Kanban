import type { SVGProps } from "react";
import type { Id } from "./";

export type Feature = {
  id: Id;
  title: string;
  subtitle: string;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
};

export type Info = {
  id: number;
  glowColor: string;
  title: string;
  subtitle: string;
  info: string;
};

export type GlowLineConfig = {
  positionClass: string;
  wrapperClass?: string;
  glowClass: string;
  sizeClass: string;
  overlayOffsetClass: string;
  borderRadiusClass: string;
  borderClass: string;
};
