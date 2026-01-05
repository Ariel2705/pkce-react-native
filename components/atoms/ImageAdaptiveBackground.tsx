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
  return (
    <ImageBackground
      source={source}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
});
