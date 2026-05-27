import IconWrapper from "../../shared/icons/icon-wrapper";
import ManageIcon from "../../shared/icons/manage-icon";
import ManageIconSm from "../../shared/icons/manage-icon-sm";
import { SectionTitle } from "./section-title";
import { HERO_BG } from "../../shared/constants/main-page";

const HeroOverlay = () => <div className="absolute inset-0 bg-black/40" />;

const HeroLeftPanel = () => (
  <div className="bg-black/30 p-6 w-full lg:w-1/2 h-full shadow-lg backdrop-blur-sm" />
);

const HeroSection = () => {
  return (
    <section
      className="relative h-[70vh] lg:h-screen w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <HeroOverlay />

      <div className="relative z-10 h-full flex items-center p-10 pb-0">
        <HeroLeftPanel />

        <div className="-translate-x-1/2 flex flex-col items-center">
          <IconWrapper lgIcon={<ManageIcon />} smIcon={<ManageIconSm />} />
          <p
            className="font-normal uppercase border-b w-full border-[#bcbcbc] py-1 flex items-center justify-end gap-2
           text-slate-200 "
          >
            <SectionTitle title="Manage tasks easily and visually" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
