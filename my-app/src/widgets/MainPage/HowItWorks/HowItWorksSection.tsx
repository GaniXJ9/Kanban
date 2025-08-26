// // import { useState } from "react";
// import { useRef } from "react";
// import LogoHeading from "./LogoHeading";
// import SecondSlide from "./SecondSlide";

// const HowItWorksSection = () => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const handleScroll = () => {
//     console.log(scrollRef.current?.scrollTop);
//   };
//   return (
//     <section
//       ref={scrollRef}
//       onScroll={handleScroll}
//       className="h-screen bg-slate-400 dark:bg-[#0f0f11] overflow-hidden overflow-y-auto"
//     >
//       <section className="relative h-[400vh]">
//         <LogoHeading scrollRef={scrollRef} />
//         <SecondSlide />
//       </section>
//     </section>
//   );
// };

// export default HowItWorksSection;
