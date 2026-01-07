import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { useThemeContext } from '@/app/context/ThemeContext';

interface Props {
  active: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

const colorWithAlpha = (color: string, alpha: number) => {
  if (!color) return color;
  if (color.startsWith('rgba') || color.startsWith('rgb')) return color;
  if (color.startsWith('#')) {
    let c = color.replace('#', '');
    if (c.length === 8) c = c.slice(0, 6);
    if (c.length === 3) c = c.split('').map((ch) => ch + ch).join('');
    const r = parseInt(c.slice(0, 2), 16);
    const g = parseInt(c.slice(2, 4), 16);
    const b = parseInt(c.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return color;
};

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
