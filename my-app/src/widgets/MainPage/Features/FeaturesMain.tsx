import clsx from "clsx";
import { useEffect, useRef, useState, type SVGProps } from "react";
import List from "../../../shared/icons/List";
import ManageIcon from "../../../shared/icons/ManageIcon";
import BxlTailwindCss from "../../../shared/icons/BxlTailwindCss";
import FeatureCard from "./FeatureCard";
import type { Id } from "../../../shared/type/IdType";

interface Feature {
  id: Id;
  title: string;
  subtitle: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}

const featuresMain: Feature[] = [
  {
    id: 1,
    title: "Columns for your process",
    subtitle:
      "Create as many stages as you need for your tasks, such as In Progress, Under Review, and Completed",
    icon: List,
  },
  {
    id: 2,
    title: "Dragging tasks",
    subtitle:
      "Change the order and move tasks between columns using drag-and-drop",
    icon: ManageIcon,
  },
  {
    id: 3,
    title: "Clean interface",
    subtitle:
      "TailwindCSS responsive design, no frills — everything for productive work",
    icon: BxlTailwindCss,
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
        "grid grid-cols-1 lg:grid-cols-3 px-20 gap-10 transition-all duration-[2s] ease-in-out mt-10"
      )}
    >
      {featuresMain.map((feature) => (
        <FeatureCard feature={feature} key={feature.id} />
      ))}
    </section>
  );
};

export default FeaturesMain;
