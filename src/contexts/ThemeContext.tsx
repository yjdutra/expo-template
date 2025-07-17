import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme, AppTheme } from "../theme";

interface ThemeContextData {
  themeName: "light" | "dark";
  theme: AppTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useThemeContext = () => useContext(ThemeContext);

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo<AppTheme>(
    () => (themeName === "light" ? lightTheme : darkTheme),
    [themeName]
  );

  return (
    <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
