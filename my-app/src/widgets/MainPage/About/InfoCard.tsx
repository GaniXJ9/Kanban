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
  // icon: React.FC<SVGProps<SVGSVGElement>>;
}

const InfoCard = ({ info }: { info: Info }) => {
  return (
    <p
      key={info.id}
      className="relative flex flex-col  gap-2 p-5  border border-[#adadad] rounded-md shadow-md z-10"
    >
      <span
        className={clsx(
          "bg-gradient-to-r",
          glowClasses[info.glowColor],
          "absolute -top-0.5 right-[5%] transform bg-transparent w-1/2 h-[2px]"
        )}
      ></span>
      {/* <span className="w-fit p-2 rounded-xl shadow-inner shadow-gray-400  text-[#07437A] ">
        <info.icon />
      </span> */}

      <h1 className="text-[1.4rem] font-bold bg-gradient-to-t from-[#8b9094] to-[#323d47] bg-clip-text text-transparent">
        {info.title}
      </h1>

      <h3 className="text-md font-medium text-slate-600">{info.subtitle}</h3>

      <h4 className="text-xs font-normal text-slate-400">{info.info}</h4>
    </p>
  );
};

export default InfoCard;
