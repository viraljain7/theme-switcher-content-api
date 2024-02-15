import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./contexts/theme";
import ThemeSwitcherCard from "./components/ThemeSwitcherCard";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <ThemeSwitcherCard />
    </ThemeContextProvider>
  );
}

export default App;
