import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".animC", {
  scrollTrigger: ".animC",
  x: 400,
  rotation: 90,
  duration: 4,
});

const GsapAnim = () => {
  return (
    <section className="h-[400vh] border-y">
      <div className="h-[90vh] flex justify-center items-center">
        <div className="animA border size-40 bg-red-400 rounded-md text-[3rem] flex justify-center items-center">
          A
        </div>
      </div>
      <div className="h-[90vh] flex justify-center items-center">
        <div className="border size-40 bg-blue-400 rounded-md text-[3rem] flex justify-center items-center">
          B
        </div>
      </div>
      <div className="h-[90vh] flex justify-center items-center">
        <div className="animC border size-40 bg-green-400 rounded-md text-[3rem] flex justify-center items-center">
          C
        </div>
      </div>
    </section>
  );
};

export default GsapAnim;
