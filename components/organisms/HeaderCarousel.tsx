import React from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { ImageAdaptiveBackground } from '../atoms/ImageAdaptiveBackground';
import { PageIndicator } from '../molecules/PageIndicator';
import { SlideContent } from '../molecules/SlideContent';

export const slides = [
  {
    id: '1',
    title: 'Más velocidad de la que necesitas',
    subtitle: 'Más megas',
    image: {
      uri: 'https://images.unsplash.com/photo-1581091870627-3a8c1c5f8f0a?fm=png&w=1080&q=80',
    },
  },
  {
    id: '2',
    title: 'Disfruta de premios increíbles',
    subtitle: 'Navega y gana',
    image: {
      uri: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?fm=png&w=1080&q=80',
    },
  },
  {
    id: '3',
    title: 'Conéctate desde cualquier lugar',
    subtitle: 'Siempre online',
    image: {
      uri: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fm=png&w=1080&q=80',
    },
  },
];


interface Props {
  index: number;
  onChange: (index: number) => void;
}

export const HeaderCarousel = ({
  index,
  onChange,
}: Props) => {
  const currentImage = slides[index].image;

  return (
    <ImageAdaptiveBackground source={currentImage}>
      <PagerView
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e) =>
          onChange(e.nativeEvent.position)
        }
      >
        {slides.map((slide) => (
          <View key={slide.id}>
            <SlideContent
              image={slide.image}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </View>
        ))}
      </PagerView>

      <PageIndicator
        length={slides.length}
        activeIndex={index}
      />
    </ImageAdaptiveBackground>
  );
};

const styles = StyleSheet.create({
  pager: {
    flex: 1,
    paddingTop: 60,
  },
});
