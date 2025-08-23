import type { SVGProps } from "react";
import type { Id } from "../../../shared/type/IdType";
import clsx from "clsx";

interface Feature {
  id: Id;
  title: string;
  subtitle: string;
  icon?: React.FC<SVGProps<SVGSVGElement>> | null;
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div
      className={clsx(
        feature.icon ? "items-center" : "items-start",
        "backdrop-blur-xl bg-gray-300/10 dark:bg-gray-700/50 flex flex-col gap-5 border p-3 border-gray-300 lg:hover:border-black dark:lg:hover:border-white justify-center rounded-md transition-all duration-500 lg:hover:-translate-y-1"
      )}
      key={feature.id}
    >
      {feature.icon && (
        <span className="w-fit p-2 rounded-xl shadow-inner shadow-gray-400  text-[#07437A] ">
          <feature.icon />
        </span>
      )}

      <p className="">
        <h1
          className={clsx(
            feature.icon
              ? "text-center text-sm lg:text-lg"
              : "text-start text-xs lg:text-md",
            "font-medium uppercase tracking-wider bg-gradient-to-r from-[#07437A] to-[#5681a9] bg-clip-text text-transparent"
          )}
        >
          {feature.title}
        </h1>

        <h3
          className={clsx(
            feature.icon
              ? "text-center text-xs lg:text-md"
              : "text-start text-xs",
            " font-medium  tracking-wider bg-gradient-to-r  from-[#2a5a87] to-[#5681a9] bg-clip-text text-transparent"
          )}
        >
          {feature.subtitle}
        </h3>
      </p>
    </div>
  );
};

export default FeatureCard;
