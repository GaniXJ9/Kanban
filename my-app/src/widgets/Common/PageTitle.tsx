const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className={`text-3xl font-medium text-slate-600 dark:text-slate-200`}>
      {title}
    </h1>
  );
};

export default PageTitle;
