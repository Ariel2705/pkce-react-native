import { MD3DarkTheme as PaperDarkTheme } from "react-native-paper";

const DarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    background: "#000000",
    surface: "#1C1C1E",
    primary: "#0A84FF",
    secondary: "#FF9F0A",
    text: "#FFFFFF",
  },
};

export default DarkTheme;