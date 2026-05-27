import type { SVGProps } from "react";
import type { Size } from "./size";

export interface buttonProps {
  text?: string;
  size?: string;
  fontSize?: Size;
  padding?: string;
  margin?: string;
  rounded?: Size;
  onClick?: () => void;
  Icon?: React.FC<SVGProps<SVGSVGElement>> | null;
}
