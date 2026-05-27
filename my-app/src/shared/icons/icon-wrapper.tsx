import type { Icon } from "../../features/types/common/icon"

interface IconWrapperProps {
    lgIcon: Icon,
    smIcon?: Icon,
}

const IconWrapper = ({lgIcon, smIcon} : IconWrapperProps) => { 
    return (
    <>
        <p className="bg-white w-fit p-2 rounded-2xl shadow-inner shadow-black border border-slate-500 text-[#07437A] hidden lg:block ">
            {lgIcon}
        </p>
        <p className="bg-white w-fit p-2 rounded-2xl shadow-inner shadow-black border border-slate-500 text-[#07437A] block lg:hidden ">
            {smIcon}
        </p>
    </>
    )
}

export default IconWrapper