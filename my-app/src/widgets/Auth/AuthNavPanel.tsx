import AuthNavButton from "./AuthNavButton";

type authType = "sing-in" | "sing-up";

const AuthNavPanel = ({
  setAuthType,
}: {
  setAuthType: (value: authType) => void;
}) => {
  const handleAuthType = (item: authType) => {
    setAuthType(item);
  };
  return (
    <div className=" my-3 py-5 flex justify-evenly">
      <AuthNavButton
        buttonText="Sing In"
        authType="sing-in"
        handleAuthType={handleAuthType}
      />
      <AuthNavButton
        buttonText="Sing Up"
        authType="sing-up"
        handleAuthType={handleAuthType}
      />
    </div>
  );
};

export default AuthNavPanel;
