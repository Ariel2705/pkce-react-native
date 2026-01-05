import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const { height } = Dimensions.get('window');

interface Props {
  image: any;
  title: string;
  subtitle: string;
}

export const SlideContent = ({
  image,
  title,
  subtitle,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.45,
    resizeMode: 'contain',
  },
  subtitle: {
    color: '#E0E0E0',
    fontSize: 14,
    marginTop: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
