import ManageIcon from "../../../shared/icons/ManageIcon";
import ManageMobileIcon from "../../../shared/icons/ManageMobileIcon";

const HeroSection = () => {
  return (
    <section
      className="relative h-[70vh] lg:h-screen w-full bg-center bg-cover"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('./heroSectionBackground.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="relative z-10 h-full flex items-center p-10 pb-0">
        <div className="bg-black/30 p-6 w-full lg:w-1/2 h-full shadow-lg backdrop-blur-sm" />

        <div className="-translate-x-1/2 flex flex-col items-center">
          <p className="bg-white w-fit p-2 rounded-2xl shadow-inner shadow-black border border-slate-500 text-[#07437A] hidden lg:block ">
            <ManageIcon />
          </p>
          <p className="bg-white w-fit p-2 rounded-2xl shadow-inner shadow-black border border-slate-500 text-[#07437A] block lg:hidden ">
            <ManageMobileIcon />
          </p>
          <p
            className="font-normal uppercase border-b w-full border-[#bcbcbc] py-1 flex items-center justify-end gap-2
           text-slate-200 "
          >
            <span className="text-sm lg:text-[2.2rem] text-center font-bold bg-gradient-to-t from-[#07437A] to-[#529bdf] bg-clip-text text-transparent">
              Manage tasks easily and visually
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
