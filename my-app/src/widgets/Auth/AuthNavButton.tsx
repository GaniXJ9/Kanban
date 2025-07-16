type authType = "sing-in" | "sing-up";

const AuthNavButton = ({
  buttonText,
  authType,
  handleAuthType,
}: {
  buttonText: string;
  authType: authType;
  handleAuthType: (value: authType) => void;
}) => {
  return (
    <button
      className={`text-xl lg:text-3xl text-white font-medium uppercase lg:hover:cursor-pointer ${
        authType === "sing-in" ? "opacity-100" : "opacity-50"
      }`}
      onClick={() => handleAuthType(authType)}
    >
      {buttonText}
    </button>
  );
};

export default AuthNavButton;
