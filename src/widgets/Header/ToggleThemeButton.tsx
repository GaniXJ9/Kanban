import type { ThemeType } from "../../app/store/StoreInterface";

function ToggleThemeButton({
  theme,
  toggleTheme,
}: {
  theme: ThemeType | string;
  toggleTheme: () => void;
}) {
  return (
    <div
      className={`relative w-14 p-3  border-2 border-white rounded-full `}
      onClick={toggleTheme}
    >
      <p
        className={`absolute top-1 size-4  rounded-full transition-all duration-200 ${
          theme === "light" ? "bg-yellow-50 left-1" : "bg-blue-900 left-8"
        }`}
      ></p>
    </div>
  );
}

export default ToggleThemeButton;
