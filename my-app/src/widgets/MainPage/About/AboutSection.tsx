import { SectionTitle } from "../SectionTitle";
import DndInfoBlock from "./DndInfoBlock";
import InfoList from "./InfoList";

// const aboutTexts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const AboutSection = () => {
  return (
    <section className="h-screen pt-10">
      <SectionTitle title="Drag.Drop.Done" />

      <DndInfoBlock />

      <InfoList />
    </section>
  );
};

export default AboutSection;
