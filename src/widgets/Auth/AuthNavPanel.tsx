import AuthButton from "./AuthButton";

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
      <AuthButton
        buttonText="Sing In"
        authType="sing-in"
        handleAuthType={handleAuthType}
      />
      <AuthButton
        buttonText="Sing Up"
        authType="sing-up"
        handleAuthType={handleAuthType}
      />
    </div>
  );
};

export default AuthNavPanel;
