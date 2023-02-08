import {useRef, useState} from 'react';
import {
  View,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImageComponent from './imagesComponent';

const {width} = Dimensions.get('window');

type Props = {
  images: string[];
};

export const ImageSlider = ({images}: Props): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(parseInt((x / width).toFixed(0)));
        }}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <Animated.View style={styles.imageContainer}>
              <ImageComponent src={item} style={styles.image}></ImageComponent>
            </Animated.View>
          );
        }}
        keyExtractor={item => item}
      />
      <View style={styles.sliderContainer}>
        {images.map((_, index) => {
          return (
            <TouchableOpacity
              key={`slider_point_${index}`}
              onPress={() => {
                ref.current.scrollToIndex({
                  index: index,
                  animated: true,
                });
              }}
              style={[
                styles.sliderPoint,
                {
                  width: index === currentIndex ? 20 : 8,
                  backgroundColor: index === currentIndex ? 'green' : 'gray',
                },
              ]}></TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: width,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 25,
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
  },
});
