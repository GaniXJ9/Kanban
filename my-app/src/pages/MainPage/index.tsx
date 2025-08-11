import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../widgets/Common/PageTitle";

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
      <PageTitle title="Main" />
    </>
  );
};

export default MainPage;
