import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
