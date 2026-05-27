import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import HeroSection from "../../widgets/MainPage/Hero/HeroSection";
import FeaturesSection from "../../widgets/main-page/Features/FeaturesSection";
import AboutSection from "../../widgets/main-page/About/AboutSection";
import HeroSectionAnimated from "../../widgets/main-page/HeroSectionAnimated/HeroSectionAnimated";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <>
      <HeroSectionAnimated />
      {/* <HeroSection /> */}
      <FeaturesSection />
      <AboutSection />
    </>
  );
};

export default MainPage;
