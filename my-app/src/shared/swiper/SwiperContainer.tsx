import type { ReactNode } from "react";
import { Swiper } from "swiper/react";

const SwiperContainer = ({ children }: { children: ReactNode }) => {
  return <Swiper className="flex"></Swiper>;
};

export default SwiperContainer;
