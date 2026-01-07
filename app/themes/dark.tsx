import { MD3DarkTheme as PaperDarkTheme } from "react-native-paper";
import { Theme } from './types';

const DarkTheme: Theme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    background: "#000000",
    secondaryBackground: "#FFFFFF",
    surface: "#1C1C1E",
    primary: "#0A84FF",
    secondary: "#FF9F0A",
    tertiary: "#FFB81C",
    outline: "#79747E",
    primaryText: "#FFFFFF",
    secondaryText: "#E0E0E0",
    onSurface: 'rgba(232, 232, 232, 1)',
    border: "#49454eff",
    error: "#f87171",
    menuBackground: "#1C1C1Eff",
    darkBlue: "#0A84FF",
  },
};

export default DarkTheme;