import { SectionTitle } from "../SectionTitle";
import DndInfoBlock from "./DndInfoBlock";
import InfoList from "./InfoList";

const AboutSection = () => {
  return (
    <section className=" pt-10 pb-20">
      <SectionTitle title="Drag.Drop.Done" />
      <DndInfoBlock />
      <InfoList />
    </section>
  );
};

export default AboutSection;
