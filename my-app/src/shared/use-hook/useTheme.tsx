import { useEffect } from "react";
import useStore from "../../app/store";

const useTheme = () => {
  const { toggleTheme, theme } = useStore();

  useEffect(() => {
    localStorage.setItem("themeMode", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
