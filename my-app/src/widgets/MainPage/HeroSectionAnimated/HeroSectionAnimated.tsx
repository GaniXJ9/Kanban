import { useEffect } from "react";
import ManageIcon from "../../../shared/icons/ManageIcon";
import DisappearAnim from "./DisappearTextAnim";
import gsap from "gsap";

const HeroSectionAnimated = () => {
  useEffect(() => {
    const kanbanIcontl = gsap.timeline({
      scrollTrigger: {
        trigger: ".kanbanIcon",
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
    });

    kanbanIcontl.to(".kanbanIcon", {
      x: 100,
      duration: 1,
      ease: "power2.inOut",
    });

    kanbanIcontl.to(".kanbanIcon", {
      scale: 100,
      rotate: 90,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to(".kanbanText", {
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      x: 300,
      opacity: 0,
    });

    gsap.to(".afterText", {
      scrollTrigger: {
        trigger: ".blueSection",
        scrub: true,
        start: "bottom top",
        end: "+=100%",
      },
      fontSize: "2rem",
    });
    gsap.to(".afterText", {
      scrollTrigger: {
        trigger: ".greenSection",
        scrub: true,
        start: "bottom top",
        end: "+=100%",
      },
      opacity: 0,
    });
  }, []);

  return (
    <section className="h-[200vh] border-y relative overflow-hidden">
      <div className="text-lg lg:text-[5rem] font-bold h-screen flex flex-col lg:flex-row items-center justify-center  fixed top-0 left-1/2 -translate-x-1/2">
        <span className="kanbanIcon text-[#07437A]">
          <ManageIcon />
        </span>
        <div className="kanbanText flex flex-col justify-center">
          <div>
            <DisappearAnim text="Kanban" />
          </div>
          <span className="text-sm kanbanText text-slate-600 dark:text-slate-300">
            Scrool it Down
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAnimated;
