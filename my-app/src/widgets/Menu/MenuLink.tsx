import type { SVGProps } from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({
  link,
  linkTitle,
  Icon,
}: {
  link: string;
  linkTitle: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
}) => {
  return (
    <NavLink
      to={link}
      className={` w-full flex justify-start gap-3 p-2 lg:px-10 items-center transition-all duration-200  
        text-white  lg:hover:text-[#07437A] dark:text-slate-200
`}
    >
      <span className="text-sm">
        <Icon />
      </span>
      <span className="text-lg uppercase">{linkTitle}</span>
    </NavLink>
  );
};

export default MenuLink;
