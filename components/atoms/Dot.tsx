import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  active: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Dot: React.FC<Props> = ({ active, onPress, style }) => {
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

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginHorizontal: 4,
  },
  active: {
    width: 16,
    backgroundColor: '#FFFFFF',
  },
  pressed: {
    opacity: 0.7,
  },
});
