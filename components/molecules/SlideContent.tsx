import { useThemeContext } from '@/app/context/ThemeContext';
import { colorWithAlpha } from '@/app/utils/color';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Label } from '../atoms/Label';

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
  const { theme } = useThemeContext();

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
      color: colorWithAlpha(theme.colors.secondaryText, 0.6),
      fontSize: 14,
      marginTop: 8,
    },
    title: {
      color: theme.colors.secondaryText,
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      paddingHorizontal: 24,
    },
  });

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Label style={styles.subtitle}>{subtitle}</Label>
      <Label style={styles.title}>{title}</Label>
    </View>
  );
};
