import { useThemeContext } from '@/app/context/ThemeContext';
import React, { useMemo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Label } from '../atoms/Label';

interface Props {
  title: string;
  subtitle: string;
  animation: {
    swipeProgress: Animated.Value;
    appearProgress: Animated.Value;
  };
}

export const LoginBody = ({ title, subtitle, animation }: Props) => {
  const { theme } = useThemeContext();
  const { swipeProgress, appearProgress } = animation;

  const animatedStyles = useMemo(() => {
    const swipeOpacity = swipeProgress.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [1, 0, 0],
    });

    const opacity = Animated.multiply(swipeOpacity, appearProgress);

    const translateY = Animated.add(
      swipeProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30],
      }),
      appearProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0],
      })
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [swipeProgress, appearProgress]);

  const styles = StyleSheet.create({
    title: {
      color: theme.colors.secondaryText,
      fontWeight: '700',
      fontSize: 16,
      paddingBottom: 15,
    },
    subtitle: {
      color: theme.colors.secondaryText,
      fontSize: 42,
    },
  });

  return (
    <Animated.View pointerEvents="none" style={animatedStyles}>
      <Label style={styles.title}>{title}</Label>
      <Label style={styles.subtitle}>{subtitle}</Label>
    </Animated.View>
  );
};
