import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../../widgets/MainPage/Hero/HeroSection";
import FeaturesSection from "../../widgets/MainPage/Features/FeaturesSection";
import AboutSection from "../../widgets/MainPage/About/AboutSection";
// import HowItWorksSection from "../../widgets/MainPage/HowItWorks/HowItWorksSection";

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
      {/* <HowItWorksSection /> */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </>
  );
};

export default MainPage;
