import clsx from "clsx";

const glowClasses: Record<string, string> = {
  red: "from-red-300/0 via-red-400 via-70% to-red-300/0",
  orange: "from-orange-300/0 via-orange-300 via-70% to-orange-300/0",
  green: "from-green-300/0 via-green-500 via-70% to-green-300/0",
  blue: "from-blue-300/0 via-blue-600 via-70% to-blue-300/0",
};

interface Info {
  id: number;
  glowColor: string;
  title: string;
  subtitle: string;
  info: string;
}

const InfoCard = ({ info }: { info: Info }) => {
  return (
    <div
      key={info.id}
      className="relative flex flex-col  gap-2 p-5  bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] border border-[#adadad] rounded-md shadow-md z-30 "
    >
      <span
        className={clsx(
          "bg-gradient-to-r",
          glowClasses[info.glowColor],
          "absolute -top-0.5 right-[50%] lg:right-[5%] transform bg-transparent w-1/2 h-[2px]"
        )}
      ></span>

      <h1 className="text-[1.4rem] font-bold bg-gradient-to-t from-[#8b9094] to-[#323d47] dark:from-[#e1e2e4] dark:to-[#ffffff]  bg-clip-text text-transparent">
        {info.title}
      </h1>

      <h3 className="text-md font-medium text-slate-600 dark:text-slate-300">
        {info.subtitle}
      </h3>

      <h4 className="text-xs font-normal text-slate-400 dark:text-slate-200">
        {info.info}
      </h4>
    </div>
  );
};

export default InfoCard;
