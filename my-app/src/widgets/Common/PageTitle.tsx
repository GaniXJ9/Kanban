import useStore from "../../app/store";

const PageTitle = ({ title }: { title: string }) => {
  const { theme } = useStore();

  return (
    <h1
      className={`text-3xl font-medium ${
        theme === "light" ? "text-slate-600" : "text-slate-200"
      }`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
