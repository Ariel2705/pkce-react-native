import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../atoms/Button';
import { Label } from '../atoms/Label';

export const LoginFooter = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
        <Button style={{ width: '50%', backgroundColor: "#FFFFFF" }}>
          <Label style={{ color: "#0A1253" }}>Iniciar sesión</Label>
        </Button>
        <Button style={{ width: '50%', backgroundColor: "#FFFFFF" }}>
          <Label style={{ color: "#0A1253" }}>Registrarte</Label>
        </Button>
      </View>
      <Button style={{ backgroundColor: "#0A1253" }}>
        <Label style={{ color: "#FFFFFF" }}>Continuar como invitado</Label>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
