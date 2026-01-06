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
    image: {
      uri: 'https://images.pexels.com/photos/5358101/pexels-photo-5358101.jpeg?cs=srgb&dl=pexels-roberto-hund-5358101.jpg&fm=jpg',
    },
  },
  {
    id: '2',
    title: 'Zona Wifi',
    subtitle: 'Cobertura en cada rincón de tu casa',
    image: {
      uri: 'https://thumbs.dreamstime.com/b/african-american-man-talking-smartphone-street-city-outdoor-cell-phone-chatting-friends-smiling-person-making-answering-426572567.jpg',
    },
  },
  {
    id: '3',
    title: 'Más megas',
    subtitle: 'Más velocidad de la que necesitas',
    image: {
      uri: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fm=png&w=1080&q=80',
    },
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
