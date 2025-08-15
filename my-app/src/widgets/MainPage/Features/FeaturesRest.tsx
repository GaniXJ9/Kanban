import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import type { Id } from "../../../shared/type/IdType";
import FeatureCard from "./FeatureCard";

interface Feature {
  id: Id;
  title: string;
  subtitle: string;
}

const featuresMain: Feature[] = [
  {
    id: 1,
    title: "Priority and labels",
    subtitle:
      "Highlight important tasks with priorities, tags, and custom labels",
  },
  {
    id: 2,
    title: "Responsive design",
    subtitle:
      "Work from any device — desktop, tablet, or mobile — without losing functionality",
  },
  {
    id: 3,
    title: "Quick task creation",
    subtitle:
      "Add new tasks instantly with a validated form using React Hook Form and Yup",
  },
  {
    id: 4,
    title: "Clean interface",
    subtitle:
      "A minimal, distraction-free design built with TailwindCSS for clarity and speed",
  },
  {
    id: 5,
    title: "Customizable board",
    subtitle:
      "Adjust column names, colors, and order to match your team's workflow",
  },
  {
    id: 6,
    title: "Real-time updates",
    subtitle: "See task changes instantly for all users without page reloads",
  },
];

const FeaturesRest = () => {
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
      { threshold: 0.7 }
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
        "grid grid-cols-3 px-20 gap-10 transition-all duration-[2s] ease-in-out mt-10"
      )}
    >
      {featuresMain.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </section>
  );
};

export default FeaturesRest;
