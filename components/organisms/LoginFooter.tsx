import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppButton as Button } from '../atoms/Button';

export const LoginFooter = () => {
  return (
    <View style={styles.container}>
      <Button label="Iniciar sesión" />
      <Button label="Registrarte" mode="outlined" />
      <Button
        label="Continuar como invitado"
        mode="text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A2A6B',
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
