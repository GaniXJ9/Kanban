const InfoBlock = ({ title, text }: { title: string; text: string }) => {
  return (
    <p className="bg-gray-200/20 p-1 lg:p-2 rounded-lg ">
      <span className="text-xs lg:text-xl font-medium text-slate-200 px-0.5">
        {title}:
      </span>
      <span className="text-xs lg:text-lg font-medium text-slate-200 px-0.5">
        {text}
      </span>
    </p>
  );
};

export default InfoBlock;
