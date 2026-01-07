import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { useThemeContext } from '@/app/context/ThemeContext';

interface Props {
  source: any;
  children?: React.ReactNode;
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

export const ImageAdaptiveBackground = ({
  source,
  children,
}: Props) => {
  const { theme } = useThemeContext();

  const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colorWithAlpha(theme.colors.onSurface, 0.03),
    },
    content: {
      flex: 1,
      justifyContent: 'flex-end',
      padding: 24,
    },
  });

  return (
    <ImageBackground
      source={source}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} pointerEvents="none" />
      <View style={styles.content}>
        {children}
      </View>
    </ImageBackground>
  );
};
