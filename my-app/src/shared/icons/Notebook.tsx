import type { SVGProps } from "react";

export default function BorderAll(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M56 472h400a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v400a16 16 0 0 0 16 16M272 72h168v168H272Zm0 200h168v168H272ZM72 72h168v168H72Zm0 200h168v168H72Z"
      ></path>
    </svg>
  );
}
