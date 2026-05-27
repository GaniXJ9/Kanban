import AllChips from "./line/all-chips";
import InfoCard from "../../shared/ui/card/info-card";
import Lines from "./lines";
import { SectionTitle } from "./section-title";
import { aboutTexts } from "../../shared/constants/main-page";

const AboutSection = () => {
  return (
    <section className="pt-10 pb-20">
      <SectionTitle title="Drag.Drop.Done" />

      <div className="relative flex justify-center items-center h-[26vh] lg:h-[40vh] z-10">
        <Lines />
        <div className="bg-gradient-to-b bg-[#2e2d2d] relative px-6 py-4 text-2xl font-extrabold text-white rounded-lg border-4 border-[#575757] shadow-lg">
          <AllChips />
          <span className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-gray-400 to-gray-100">
            KANBAN
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 pl-16  lg:px-20">
        {aboutTexts.map((el) => (
          <InfoCard info={el} key={el.id} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
