import { Button, View, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginWithKeycloak } from '../../store/auth/auth.thunks';

export default function Login() {
  const dispatch = useAppDispatch();
  const { loading, isAuthenticated } = useAppSelector(s => s.auth);

  if (loading) return <ActivityIndicator />;

  return (
    <View>
      {!isAuthenticated ? (
        <Button
          title="Login con Keycloak"
          onPress={() => dispatch(loginWithKeycloak())}
        />
      ) : (
        <Button title="Logueado ✅" disabled />
      )}
    </View>
  );
}
