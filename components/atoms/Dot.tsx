import { useThemeContext } from '@/app/context/ThemeContext';
import { colorWithAlpha } from '@/app/utils/color';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  active: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Dot: React.FC<Props> = ({ active, onPress, style }) => {
  const { theme } = useThemeContext();

  const styles = StyleSheet.create({
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colorWithAlpha(theme.colors.secondaryText, 0.4),
      marginHorizontal: 4,
    },
    active: {
      width: 16,
      backgroundColor: theme.colors.secondaryText,
    },
    pressed: {
      opacity: 0.7,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [
        styles.dot,
        active && styles.active,
        pressed && styles.pressed,
        style,
      ]}
    />
  );
};
