import { ImageAdaptiveBackground } from '@/components/atoms/ImageAdaptiveBackground';
import { Label } from '@/components/atoms/Label';
import { PageIndicator } from '@/components/molecules/PageIndicator';
import { LoginFooter } from '@/components/organisms/LoginFooter';
import { api } from '@/services/api';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { showSuccessToast } from '@/store/middleware/notification-middleware';
import { useRef, useState } from 'react';
import { ActivityIndicator, Animated, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

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
  const { loading, isAuthenticated } = useAppSelector(s => s.auth);
  const pagerRef = useRef<PagerView>(null);

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

  const handleDotPress = (pageIndex: number) => {
    setIndex(pageIndex);
    pagerRef.current?.setPage(pageIndex);
  };

  const handlePageSelected = (e: any) => {
    setIndex(e.nativeEvent.position);
  };

  const handlePageScroll = (e: any) => {
    scrollOffset.setValue(e.nativeEvent.offset);
    appearAnim.setValue(0);
    Animated.timing(appearAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };


  const scrollOffset = useRef(new Animated.Value(0)).current;
  const appearAnim = useRef(new Animated.Value(1)).current;

  const swipeOpacity = scrollOffset.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [1, 0, 0],
  });

  const opacity = Animated.multiply(swipeOpacity, appearAnim);

  const translateY = Animated.add(
    scrollOffset.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30],
    }),
    appearAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    })
  );

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={StyleSheet.absoluteFill}
        initialPage={0}
        overdrag
        onPageSelected={handlePageSelected}
        onPageScroll={handlePageScroll}>
        {slides.map((slide) => (
          <View key={slide.id}>
            <ImageAdaptiveBackground source={slide.image} />
          </View>
        ))}
      </PagerView>
      <View style={styles.footerContainer}>
        <Animated.View
          pointerEvents="none"
          style={{
            opacity,
            transform: [{ translateY }],
          }}
        >
          <Label style={styles.title}>
            {slides[index].title}
          </Label>
          <Label style={styles.subtitle}>
            {slides[index].subtitle}
          </Label>
        </Animated.View>

        <PageIndicator
          length={slides.length}
          activeIndex={index}
          onPress={handleDotPress}
        />
        <LoginFooter />
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
  subtitleContainer: {
    bottom: 20,
    width: '100%',
  },
  title: {
    color: 'white',
    fontWeight: 700,
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 15
  },

  subtitle: {
    color: 'white',
    fontSize: 42,
    textAlign: 'left',
  },
});
