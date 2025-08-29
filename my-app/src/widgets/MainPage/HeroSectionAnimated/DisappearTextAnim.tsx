import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const DisappearAnim = ({ text }: { text: string }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont",
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });

    tl.to(".letter", {
      opacity: 0,
      stagger: {
        from: "end",
        amount: 5,
      },
      duration: 0.5,
    });
  }, []);

  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter bg-gradient-to-t from-[#07437A] to-[#529bdf] bg-clip-text text-transparent inline-block"
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default DisappearAnim;
