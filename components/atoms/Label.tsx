import { useThemeContext } from '@/app/context/ThemeContext';
import React from 'react';
import { Text, TextStyle } from 'react-native';

type LabelProps = {
  children: React.ReactNode;
  style?: TextStyle;
};

export const Label: React.FC<LabelProps> = ({ children, style }) => {
  const { theme } = useThemeContext();

  return <Text style={[{ color: theme.colors.primaryText }, style]}>{children}</Text>;
};
