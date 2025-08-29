import clsx from "clsx";
import { useEffect } from "react";
import type { Id } from "../../../shared/type/IdType";
import FeatureCard from "./FeatureCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".featuresRest",
      {
        y: 20,
        opacity: 0,
      },
      { scrollTrigger: ".featuresRest", y: -20, opacity: 100, duration: 0.2 }
    );
  }, []);

  return (
    <section
      className={clsx(
        "featuresRest grid grid-cols-1 lg:grid-cols-3 px-5 pl-15 lg:px-20 gap-10 transition-all duration-[2s] ease-in-out mt-10 "
      )}
    >
      {featuresMain.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </section>
  );
};

export default FeaturesRest;
