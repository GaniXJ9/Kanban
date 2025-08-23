import clsx from "clsx";
import { useEffect, useRef, useState, type SVGProps } from "react";
import BxlTailwindCss from "../../../shared/icons/BxlTailwindCss";
import FeatureCard from "./FeatureCard";
import type { Id } from "../../../shared/type/IdType";
import ReactIcon from "../../../shared/icons/ReactIcon";
import TypeScriptIcon from "../../../shared/icons/TypeScriptIcon";

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
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={clsx(
        animate ? "-translate-y-2 opacity-100" : "translate-y-5 opacity-0",
        "grid grid-cols-1 lg:grid-cols-3 px-5 pl-15 lg:px-20 gap-10 transition-all duration-[2s] ease-in-out mt-10"
      )}
    >
      {featuresMain.map((feature) => (
        <FeatureCard feature={feature} key={feature.id} />
      ))}
    </section>
  );
};

export default FeaturesMain;
