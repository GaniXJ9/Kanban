import { SectionTitle } from "../SectionTitle";
import FeaturesMain from "./FeaturesMain";
import FeaturesRest from "./FeaturesRest";

const FeaturesSection = () => {
  return (
    <div className="relative min-h-screen pt-10 border-b border-gray-500">
      <SectionTitle title="Project Features" />
      <FeaturesMain />
      <FeaturesRest />
    </div>
  );
};

export default FeaturesSection;
