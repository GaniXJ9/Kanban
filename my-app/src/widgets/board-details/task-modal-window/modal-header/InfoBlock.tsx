const InfoBlock = ({ title, text }: { title: string; text: string }) => {
  return (
    <p className="p-1">
      <span className="text-xs lg:text-lg font-medium tracking-wider text-slate-200 px-0.5 ">
        {title}:
      </span>
      <span className="text-xs lg:text-lg font-normal text-slate-200 px-0.5 capitalize ">
        {text}
      </span>
    </p>
  );
};

export default InfoBlock;
