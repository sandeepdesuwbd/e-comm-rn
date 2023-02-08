import {Image, StyleSheet} from 'react-native';

interface IProps {
  src: string;
}

const Images = ({src}: IProps) => {
  // const imgUri = list?.length ? list[0] : 'https://reactjs.org/logo-og.png';
  return <Image source={{uri: src}} style={styles.productImage} />;
};

const styles = StyleSheet.create({
  productImage: {
    width: 100,
    height: 150,
  },
});

export default Images;
