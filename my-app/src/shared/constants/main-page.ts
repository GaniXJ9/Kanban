import BxlTailwindCss from "../icons/bxl-tailwindcss";
import ReactIcon from "../icons/react-icon";
import TypeScriptIcon from "../icons/typescript-icon";
import type { Feature, GlowLineConfig, Info } from "../type/main-page";

export const HERO_BG = "/heroSectionBackground.jpg";

export const features: Feature[] = [
  {
    id: 1,
    title: "React",
    subtitle:
      "Create as many stages as you need for your tasks, such as In Progress, Under Review, and Completed",
    icon: ReactIcon,
  },
  {
    id: 2,
    title: "TailwindCSS",
    subtitle:
      "Change the order and move tasks between columns using drag-and-drop",
    icon: BxlTailwindCss,
  },
  {
    id: 3,
    title: "TypeScript ",
    subtitle:
      "TailwindCSS responsive design, no frills — everything for productive work",
    icon: TypeScriptIcon,
  },
  {
    id: 4,
    title: "Priority and labels",
    subtitle:
      "Highlight important tasks with priorities, tags, and custom labels",
  },
  {
    id: 5,
    title: "Responsive design",
    subtitle:
      "Work from any device — desktop, tablet, or mobile — without losing functionality",
  },
  {
    id: 6,
    title: "Quick task creation",
    subtitle:
      "Add new tasks instantly with a validated form using React Hook Form and Yup",
  },
  {
    id: 7,
    title: "Clean interface",
    subtitle:
      "A minimal, distraction-free design built with TailwindCSS for clarity and speed",
  },
  {
    id: 8,
    title: "Customizable board",
    subtitle:
      "Adjust column names, colors, and order to match your team's workflow",
  },
  {
    id: 9,
    title: "Real-time updates",
    subtitle: "See task changes instantly for all users without page reloads",
  },
];

export const aboutTexts: Info[] = [
  {
    id: 1,
    glowColor: "red",
    title: "React-hook-form + Yup",
    subtitle: "Form validation",
    info: "Instant validation without lags. Forms that are fast and reliable. Minimal re-renders — maximum responsiveness",
  },
  {
    id: 2,
    glowColor: "orange",
    title: "AppRouter",
    subtitle: "Routing without the chaos",
    info: "Clean navigation. Simple routing without chaos or confusion. Keeps your app structure transparent and predictable.",
  },
  {
    id: 3,
    glowColor: "green",
    title: "Zustand",
    subtitle: "Storing data",
    info: "Lightweight and fast state management. Store and organize data with ease. Create boards, columns, and tasks for any workflow.",
  },
  {
    id: 4,
    glowColor: "blue",
    title: "React Testing Library",
    subtitle: "Test all main components",
    info: "Test the way users interact. Reliable components mean a stable app. Catch bugs early and ensure long-term consistency.",
  },
];

export const lines = [
  {
    id: 1,
    className:
      "border-2 border-[#adadad] w-[250px] h-24 pt-5 border-r-transparent border-b-transparent absolute left-1/2 translate-x-3 -translate-y-1/2 rounded-tl-lg",
    dotPosition: "-top-1 -right-1",
  },
  {
    id: 2,
    className:
      "border-2 border-[#adadad] w-[250px] h-18 pt-5 border-r-transparent border-b-transparent absolute left-1/2 translate-x-[54px] -translate-y-1/2 rounded-tl-lg",
    dotPosition: "-top-1 -right-1",
  },
  {
    id: 3,
    className:
      "border-[#adadad] border-2 h-[150px] border-r-transparent border-b-transparent absolute left-1/2 -translate-x-2 -translate-y-10",
    dotPosition: "-top-1 -right-1",
  },
  {
    id: 4,
    className:
      "border-[#adadad] border-2 w-[430px] h-10 border-r-transparent border-t-transparent absolute right-1/2 -translate-x-20 bottom-1/2 -translate-y-2 rounded-b-lg",
    dotPosition: "-top-1 -left-1",
  },
  {
    id: 5,
    className:
      "border-2 border-[#adadad] w-[250px] h-24 pt-5 border-l-transparent border-b-transparent absolute right-1/2 -translate-x-[49px] -translate-y-1/2 rounded-tr-lg",
    dotPosition: "-top-1 -left-1",
  },
];

export const glowLines: GlowLineConfig[] = [
  {
    positionClass: "absolute top-1/2 -translate-y-[15px] left-1/2 p-0.5",
    glowClass: "blue-glow",
    sizeClass: "h-34 w-[35vw]",
    overlayOffsetClass: "top-[5px] right-1",
    borderRadiusClass: "rounded-tr-md",
    borderClass:
      "border-2 border-[#adadad] border-b-transparent border-l-transparent",
  },
  {
    positionClass: "absolute top-1/2 translate-y-1.5 left-1/2 p-0.5",
    glowClass: "green-glow",
    sizeClass: "h-32 w-64",
    overlayOffsetClass: "top-1 right-[4px]",
    borderRadiusClass: "rounded-tr-md",
    borderClass:
      "border-2 border-[#adadad] border-b-transparent border-l-transparent",
  },
  {
    positionClass:
      "absolute top-1/2 translate-y-1.5 -translate-x-[47px] right-1/2 pr-0.5",
    glowClass: "yellow-glow",
    sizeClass: "h-29 w-10",
    overlayOffsetClass: "top-1 right-[3px]",
    borderRadiusClass: "rounded-tr-md",
    borderClass:
      "border-2 border-[#adadad] border-y-transparent border-l-transparent",
  },
  {
    positionClass: "absolute top-1/2 translate-y-2 -translate-x-15 right-1/2",
    glowClass: "red-glow",
    sizeClass: "h-32 w-[25vw]",
    overlayOffsetClass: "top-1 left-1",
    borderRadiusClass: "rounded-tl-md",
    borderClass:
      "border-2 border-[#adadad] border-b-transparent border-r-transparent",
  },
];
