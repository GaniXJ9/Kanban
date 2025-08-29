import Question from "../../../shared/icons/Question";
import InfoCard from "./InfoCard";

const aboutTexts = [
  {
    id: 1,
    glowColor: "red",
    title: "React-hook-form + Yup",
    subtitle: "Form validation",
    info: "Instant validation without lags. Forms that are fast and reliable. Minimal re-renders — maximum responsiveness",
    icon: Question,
  },
  {
    id: 2,
    glowColor: "orange",
    title: "AppRouter",
    subtitle: "Routing without the chaos",
    info: "Clean navigation. Simple routing without chaos or confusion. Keeps your app structure transparent and predictable.",
  },
  {
    id: 3,
    glowColor: "green",
    title: "Zustand",
    subtitle: "Storing data",
    info: "Lightweight and fast state management. Store and organize data with ease. Create boards, columns, and tasks for any workflow.",
  },
  {
    id: 4,
    glowColor: "blue",
    title: "React Testing Library",
    subtitle: "Test all main components",
    info: "Test the way users interact. Reliable components mean a stable app. Catch bugs early and ensure long-term consistency.",
  },
];

const InfoList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 pl-16  lg:px-20">
      {aboutTexts.map((el) => (
        <InfoCard info={el} key={el.id} />
      ))}
    </div>
  );
};

export default InfoList;
