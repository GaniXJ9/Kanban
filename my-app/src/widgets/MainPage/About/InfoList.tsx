import Question from "../../../shared/icons/Question";
import InfoCard from "./InfoCard";

const aboutTexts = [
  {
    id: 1,
    glowColor: "red",
    title: "React",
    subtitle: "Organize your work without the stress",
    info: "Forget the chaos of task trackers and spreadsheets. Kanban turns tasks into a clear visual flow where everything is under control",
    icon: Question,
  },
  {
    id: 2,
    glowColor: "orange",
    title: "TypeScript",
    subtitle: "Teamwork without the chaos",
    info: "Add members, assign tasks, and track progress in real time. All communication stays right inside the cards",
  },
  {
    id: 3,
    glowColor: "green",
    title: "TailwindCSS",
    subtitle: "Adapt to your own process",
    info: "Create boards and columns for any workflow: from development and marketing to personal tasks",
  },
  {
    id: 4,
    glowColor: "blue",
    title: "DndKit",
    subtitle: "Visual progress control",
    info: "See at a glance what’s done, what’s in progress, and what’s stuck. Transparency means efficiency",
  },
];

const InfoList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-center gap-5   px-5 pl-16  lg:px-20">
      {aboutTexts.map((el) => (
        <InfoCard info={el} key={el.id} />
      ))}
    </div>
  );
};

export default InfoList;
