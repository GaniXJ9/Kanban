import { useState } from "react";
import SignIn from "../widgets/SignIn";
import SignUp from "../widgets/SignUp";

type authType = "sing-in" | "sing-up";

function Auth() {
  const [authType, setAuthType] = useState<authType>("sing-in");

  const handleAuthType = (item: authType) => {
    setAuthType(item);
  };

  return (
    <section className="bg-gradient-to-t from-[#745BFF] to-white h-screen flex justify-center items-center">
      <div className="bg-gradient-to-t from-[#9469DE] to-[#7B77EE] p-10 w-1/2 shadow-xl">
        <p className="w-full text-center text-5xl text-white font-extralight">
          KANBAN
        </p>

        <div className=" my-3 py-5 flex justify-evenly">
          <p
            className={`text-3xl text-white font-medium uppercase lg:hover:cursor-pointer ${
              authType === "sing-in" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleAuthType("sing-in")}
          >
            Sign In
          </p>
          <p
            className={`text-3xl text-white font-medium uppercase lg:hover:cursor-pointer ${
              authType === "sing-up" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleAuthType("sing-up")}
          >
            Sign Up
          </p>
        </div>

        {authType === "sing-in" ? <SignIn /> : <SignUp />}
      </div>
    </section>
  );
}

export default Auth;
