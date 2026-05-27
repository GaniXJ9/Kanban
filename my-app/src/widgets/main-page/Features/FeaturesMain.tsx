import clsx from "clsx";
import { useEffect, type SVGProps } from "react";
import BxlTailwindCss from "../../../shared/icons/BxlTailwindCss";
import FeatureCard from "./FeatureCard";
import type { Id } from "../../../shared/type/IdType";
import ReactIcon from "../../../shared/icons/ReactIcon";
import TypeScriptIcon from "../../../shared/icons/TypeScriptIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Feature {
  id: Id;
  title: string;
  subtitle: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}

const featuresMain: Feature[] = [
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
];

const FeaturesMain = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".featuresMain",
      {
        y: 20,
        opacity: 0,
      },
      { scrollTrigger: ".featuresMain", y: -20, opacity: 100, duration: 0.2 }
    );
  }, []);

  return (
    <section
      className={clsx(
        "featuresMain grid grid-cols-1 lg:grid-cols-3 px-5 pl-15 lg:px-20 gap-10 transition-all duration-[2s] ease-in-out mt-10"
      )}
    >
      {featuresMain.map((feature) => (
        <FeatureCard feature={feature} key={feature.id} />
      ))}
    </section>
  );
};

export default FeaturesMain;
