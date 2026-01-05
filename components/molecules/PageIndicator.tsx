import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dot } from '../atoms/Dot';

interface Props {
  length: number;
  activeIndex: number;
}

export const PageIndicator = ({
  length,
  activeIndex,
}: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, i) => (
        <Dot key={i} active={i === activeIndex} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
