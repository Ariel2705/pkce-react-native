import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  active: boolean;
}

export const Dot = ({ active }: Props) => {
  return <View style={[styles.dot, active && styles.active]} />;
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
});
