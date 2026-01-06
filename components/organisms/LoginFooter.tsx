import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Button } from '../atoms/Button';
import { Label } from '../atoms/Label';

interface Props {
  loading: boolean;
  onLogin: () => void;
  onRegister: () => void;
  onContinueAsGuest: () => void;
}

export const LoginFooter = ({
  loading,
  onLogin,
  onRegister,
  onContinueAsGuest,
}: Props) => {
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button style={styles.secondaryButton} onPress={onLogin}>
          <Label style={styles.secondaryLabel}>Iniciar sesión</Label>
        </Button>

        <Button style={styles.secondaryButton} onPress={onRegister}>
          <Label style={styles.secondaryLabel}>Registrarte</Label>
        </Button>
      </View>

      <Button style={styles.primaryButton} onPress={onContinueAsGuest}>
        <Label style={styles.primaryLabel}>Continuar como invitado</Label>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  secondaryButton: {
    width: '50%',
    backgroundColor: '#FFFFFF',
  },
  secondaryLabel: {
    color: '#0A1253',
  },
  primaryButton: {
    backgroundColor: '#0A1253',
  },
  primaryLabel: {
    color: '#FFFFFF',
  },
});
