import { HeaderCarousel } from '@/components/organisms/HeaderCarousel';
import { LoginFooter } from '@/components/organisms/LoginFooter';
import { api } from '@/services/api';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { showSuccessToast } from '@/store/middleware/notification-middleware';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

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

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
        <HeaderCarousel
          index={index}
          onChange={setIndex}
        />
        <LoginFooter />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
