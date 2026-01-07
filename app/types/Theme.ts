export interface Theme {
  colors: {
    background: string;
    secondaryBackground: string;
    surface: string;
    primary: string;
    secondary: string;
    tertiary: string;
    outline: string;
    primaryText: string;
    secondaryText: string;
    onSurface: string;
    border: string;
    error: string;
    menuBackground: string;
    darkBlue: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export default Theme;
