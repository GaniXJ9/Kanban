const BoardTitle = ({ title }: { title: string }) => {
  return (
    <h3
      className={`text-xs font-medium uppercase text-slate-600 dark:text-slate-200`}
    >
      {title}
    </h3>
  );
};

export default BoardTitle;
