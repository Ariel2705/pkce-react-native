import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dot } from '../atoms/Dot';

interface Props {
  length: number;
  activeIndex: number;
  onPress: (index: number) => void;
}

export const PageIndicator = ({
  length,
  activeIndex,
  onPress
}: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, i) => (
        <Dot key={i} active={i === activeIndex} onPress={() => onPress(i)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
});
