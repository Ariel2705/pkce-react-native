import { PageIndicator } from '@/components/molecules/PageIndicator';
import { LoginBody } from '@/components/organisms/LoginBody';
import { LoginCarousel } from '@/components/organisms/LoginCarousel';
import { LoginFooter } from '@/components/organisms/LoginFooter';
import { loginWithKeycloak } from '@/store/auth/auth.thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export const slides = [
  {
    id: '1',
    title: 'Navega y gana',
    subtitle: 'Disfruta de premios increíbles',
    image: require('@/assets/images/login/login-bg-1.png')
  },
  {
    id: '2',
    title: 'Zona Wifi',
    subtitle: 'Cobertura en cada rincón de tu casa',
    image: require('@/assets/images/login/login-bg-2.png')
  },
  {
    id: '3',
    title: 'Más megas',
    subtitle: 'Más velocidad de la que necesitas',
    image: require('@/assets/images/login/login-bg-3.png')
  },
];

export default function Login() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(s => s.auth);
  const [index, setIndex] = useState(0);
  const swipeProgress = useRef(new Animated.Value(0)).current;
  const appearProgress = useRef(new Animated.Value(1)).current;


  return (
    <View style={styles.container}>
      <LoginCarousel
        slides={slides}
        onIndexChange={setIndex}
        swipeProgress={swipeProgress}
        appearProgress={appearProgress}
      />

      <View style={styles.footerContainer}>
        <LoginBody
          title={slides[index].title}
          subtitle={slides[index].subtitle}
          animation={{
            swipeProgress,
            appearProgress,
          }}
        />

        <PageIndicator
          length={slides.length}
          activeIndex={index}
          onPress={setIndex}
        />

        <LoginFooter
          loading={loading}
          onLogin={() => dispatch(loginWithKeycloak())}
          onRegister={() => console.log('register')}
          onContinueAsGuest={() => console.log('guest')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
    width: '100%',
  },
});
