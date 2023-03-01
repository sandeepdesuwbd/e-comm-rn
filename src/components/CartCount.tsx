import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppSelector} from '../../store/hooks';

export const CartCount = (): JSX.Element => {
  const cart = useAppSelector(state => state.product.cart);
  const length = cart.reduce((a, b) => a + b.count, 0);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.navigate('AddToCart');
      }}>
      <Image
        source={{uri:require('../../assets/app-icons/add-to-cart.jpeg')}}
        style={styles.cartImage}
      />
      <Text style={styles.cartCount}>{length}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: 20,
    height: 20,
  },
  cartCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
