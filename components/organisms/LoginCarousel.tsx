import { ImageAdaptiveBackground } from '@/components/atoms/ImageAdaptiveBackground';
import React, { useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface Props {
  slides: Slide[];
  onIndexChange: (index: number) => void;
  swipeProgress: Animated.Value;
  appearProgress: Animated.Value;
}

export const LoginCarousel = ({
  slides,
  onIndexChange,
  swipeProgress,
  appearProgress,
}: Props) => {
  const pagerRef = useRef<PagerView>(null);

  const handlePageSelected = (e: any) => {
    onIndexChange(e.nativeEvent.position);
  };

  const handlePageScroll = (e: any) => {
    swipeProgress.setValue(e.nativeEvent.offset);

    appearProgress.setValue(0);
    Animated.timing(appearProgress, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <PagerView
      ref={pagerRef}
      style={StyleSheet.absoluteFill}
      initialPage={0}
      overdrag
      onPageSelected={handlePageSelected}
      onPageScroll={handlePageScroll}
    >
      {slides.map(slide => (
        <View key={slide.id}>
          <ImageAdaptiveBackground source={slide.image} />
        </View>
      ))}
    </PagerView>
  );
};
