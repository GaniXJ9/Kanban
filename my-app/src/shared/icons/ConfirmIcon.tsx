import type { SVGProps } from "react";

export default function ConfirmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </circle>
        <path
          fill="none"
          strokeDasharray="14"
          strokeDashoffset="14"
          d="M8 12L11 15L16 10"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="14;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
