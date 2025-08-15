import { SectionTitle } from "../SectionTitle";
import DndInfoBlock from "./DndInfoBlock";

const AboutSection = () => {
  return (
    <section className="h-screen pt-10">
      <SectionTitle title="Drag.Drop.Done" />

      <DndInfoBlock />
    </section>
  );
};

export default AboutSection;
