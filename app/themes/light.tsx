import { MD3LightTheme as PaperLightTheme } from "react-native-paper";

const DefaultTheme = {
  ...PaperLightTheme,
  colors: {
    ...PaperLightTheme.colors,
    background: "#FFFFFF",
    secondaryBackground: "#000000",
    surface: "#fbfcfeff",
    primary: "#1e40af",
    secondary: "#94c2ffff",
    tertiary: "#2563eb",
    outline: "#9CA3AF",
    primaryText: "#000000",
    secondaryText: "#ffffffff",
    onSurface: 'rgba(28, 27, 31, 1)',
    border: "#b1b1b1ff",
    error: "#dc2626",
    menuBackground: "#111c2efa",
  },
};

export default DefaultTheme;