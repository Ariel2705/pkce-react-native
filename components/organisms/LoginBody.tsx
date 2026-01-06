import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Label } from '../atoms/Label';
interface Props {
  title: string;
  subtitle: string;
  scrollOffset: Animated.Value;
  appearAnim: Animated.Value;
}

export const LoginBody = ({ title, subtitle, scrollOffset, appearAnim }: Props) => {


  const swipeOpacity = scrollOffset.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [1, 0, 0],
  });

  const opacity = Animated.multiply(swipeOpacity, appearAnim);

  const translateY = Animated.add(
    scrollOffset.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30],
    }),
    appearAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    })
  );

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        opacity,
        transform: [{ translateY }],
      }}
    >
      <Label style={styles.title}>
        {title}
      </Label>
      <Label style={styles.subtitle}>
        {subtitle}
      </Label>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  subtitleContainer: {
    bottom: 20,
    width: '100%',
  },
  title: {
    color: 'white',
    fontWeight: 700,
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 15
  },

  subtitle: {
    color: 'white',
    fontSize: 42,
    textAlign: 'left',
  },
});
