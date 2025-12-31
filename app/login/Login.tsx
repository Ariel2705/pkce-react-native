import { Button, View, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginWithKeycloak } from '../../store/auth/auth.thunks';
import { api } from '@/services/api';
import { showErrorToast, showSuccessToast } from '@/store/middleware/notification-middleware';

export default function Login() {
  const dispatch = useAppDispatch();
  const { loading, isAuthenticated } = useAppSelector(s => s.auth);

  const onPress = () => {
    api.get('/pruebaa/a').then(response => {
      console.log('Respuesta de /prueba:', response.data);
      showSuccessToast(response.data.message);
    }).catch(error => {
      //showErrorToast('Error fetching user profile:' + error);
    });
  }

  if (loading) return <ActivityIndicator />;

  return (
    <View>
        <Button
          title="Login con Keycloak"
          onPress={() => dispatch(loginWithKeycloak())}
          />
    </View>
  );
}
