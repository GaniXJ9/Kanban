import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "../../widgets/main-page/feature-section";
import AboutSection from "../../widgets/main-page/about-section";
import HeroSection from "../../widgets/main-page/hero-section";
// import HeroSectionAnimated from "../../widgets/main-page/HeroSectionAnimated/HeroSectionAnimated";

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
      {/* <HeroSectionAnimated /> */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </>
  );
};

export default MainPage;
