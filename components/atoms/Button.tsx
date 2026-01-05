import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {
  label: string;
  mode?: 'contained' | 'outlined' | 'text' | 'elevated' | 'contained-tonal';
  onPress?: () => void;
}

export const AppButton = ({
  label,
  mode = 'contained',
  onPress,
}: Props) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={[
        styles.button,
        mode === 'outlined' && styles.outlined,
      ]}
      labelStyle={styles.label}
      textColor={mode === 'text' ? '#FFFFFF' : undefined}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    marginBottom: 12,
  },
  outlined: {
    borderColor: '#FFFFFF',
  },
  label: {
    fontWeight: '700',
  },
});
