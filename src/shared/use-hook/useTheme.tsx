import { useEffect, useState } from "react";
import type { ThemeType } from "../../app/store/StoreInterface";

function useTheme() {
  const [theme, setTheme] = useState<ThemeType | string>(
    localStorage.getItem("themeMode") || "light"
  );

  const toggleTheme = () => {
    const nextState = theme === "light" ? "dark" : "light";
    setTheme(nextState);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", theme);
  }, [theme]);

  return { theme, toggleTheme };
}

export default useTheme;
