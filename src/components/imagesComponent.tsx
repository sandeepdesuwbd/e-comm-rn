import {Image, StyleSheet} from 'react-native';

interface IProps {
  src: string;
  style?: {};
}

const ImageComponent = ({src, style}: IProps) => {
  return <Image source={{uri: src}} style={[styles.productImage, style]} resizeMode='contain'/>;
};

const styles = StyleSheet.create({
  productImage: {
    width: 100,
    height: 150,
  },
});

export default ImageComponent;
