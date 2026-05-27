import FeatureCard from "../../shared/ui/card/feature-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { SectionTitle } from "./section-title";
import { features } from "../../shared/constants/main-page";

const FeaturesSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const main = gsap.fromTo(
      ".featuresMain",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: ".featuresMain",
      },
    );

    const rest = gsap.fromTo(
      ".featuresRest",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: ".featuresRest",
      },
    );

    return () => {
      main.kill();
      rest.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-10 pb-20 border-b border-gray-500">
      <SectionTitle title="Project Features" />

      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 pl-15 lg:px-20 gap-10 transition-all duration-[2s] ease-in-out mt-10">
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
