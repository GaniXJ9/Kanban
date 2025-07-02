import useStore from "../../../../app/store";

const BoardTitle = ({ title }: { title: string }) => {
  const { theme } = useStore();
  return (
    <h3
      className={`text-xs font-medium uppercase ${
        theme === "light" ? "text-slate-600" : "text-slate-200"
      }`}
    >
      {title}
    </h3>
  );
};

export default BoardTitle;
