import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import DefaultTheme from "../themes/light";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: typeof DefaultTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: DefaultTheme,
  mode: "system",
  setMode: () => { },
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>("system");
  const [theme, setTheme] = useState(DefaultTheme);

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("themeMode");
      if (saved === "dark" || saved === "light" || saved === "system") {
        setMode(saved);
      }
    })();
  }, []);

  useEffect(() => {
    const effective =
      mode === "system" ? (colorScheme === "dark" ? "dark" : "light") : mode;

    // TODO: Corregir tema oscuro
    //setTheme(effective === "dark" ? DarkTheme : DefaultTheme);
    setTheme(DefaultTheme);
  }, [mode, colorScheme]);

  const handleSetMode = async (newMode: ThemeMode) => {
    setMode(newMode);
    await AsyncStorage.setItem("themeMode", newMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode: handleSetMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;