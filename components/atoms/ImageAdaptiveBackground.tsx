import { useThemeContext } from '@/app/context/ThemeContext';
import { colorWithAlpha } from '@/app/utils/color';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

interface Props {
  source: any;
  children?: React.ReactNode;
}

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
