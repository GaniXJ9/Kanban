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
      <div className="text-[5rem] font-bold h-screen flex items-center fixed top-0 left-1/2 -translate-x-1/2">
        <span className="kanbanIcon text-[#07437A]">
          <ManageIcon />
        </span>
        <div className="kanbanText">
          <DisappearAnim text="Kanban" />
        </div>
      </div>
    </section>
  );
};

// bg-red-50
// bg-blue-50
// bg-yellow-50
// bg-green-50
// bg-orange-50

export default HeroSectionAnimated;
