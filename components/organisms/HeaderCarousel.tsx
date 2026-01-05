import React from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

interface Props {
  slides: object[];
  index: number;
  onChange: (index: number) => void;
}

export const HeaderCarousel = ({
  slides,
  index,
  onChange,
}: Props) => {

  return (
    <View>
      <PagerView
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e) =>
          onChange(e.nativeEvent.position)
        }
      >
        {/*slides.map((slide) => (
          <View key={slide.id}>
            <SlideContent
              image={slide.image}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </View>
        ))*/}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  pager: {
    flex: 1,
    paddingTop: 60,
  },
});
