import { useState } from "react";
import SingInPage from "../SingInPage";
import RegistrationPage from "../RegistartionPage";
import AuthNavPanel from "../../widgets/Auth/AuthNavPanel";

type authType = "sing-in" | "sing-up";

const Auth = () => {
  const [authType, setAuthType] = useState<authType>("sing-in");

  return (
    <section className="bg-gradient-to-t from-[#745BFF] to-white h-screen flex justify-center items-center">
      <div className="bg-gradient-to-t from-[#9469DE] to-[#7B77EE] p-10 w-4/5 lg:w-1/2 shadow-xl">
        <p className="w-full text-center text-xl lg:text-5xl text-white font-extralight ">
          KANBAN
        </p>
        <AuthNavPanel setAuthType={setAuthType} />
        {authType === "sing-in" ? <SingInPage /> : <RegistrationPage />}
      </div>
    </section>
  );
};

export default Auth;
