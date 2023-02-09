import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {ImageSlider} from './imageSlider';
import {addToCart} from '../../store/product';

export const ProductDetailsComponent = (): JSX.Element => {
  const product = useAppSelector(state => state.product.selectedProduct);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <ImageSlider images={product.images} />
      <View style={styles.detailsContainer}>
        <View style={styles.mainContainer}>
          <Text>Name: </Text>
          <Text style={[styles.bold, styles.startWithUppercase]}>{product.title}</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text>Description: {product.description}</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text>Price: </Text>
          <Text style={styles.bold}>${product.price}</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text>Discount: </Text>
          <Text style={styles.bold}>{product.discountPercentage}%</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text>Instock: </Text>
          <Text style={styles.bold}>{product.stock ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text>Category: </Text>
          <Text style={[styles.bold, styles.startWithUppercase]}>
            {product.category}
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <Text>Rating: </Text>
          <Text style={styles.bold}>{product.rating}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buyNow]}
          onPress={() => {
            dispatch(addToCart(product));
            navigation.navigate('AddToCart');
          }}>
          <Text>BuyNow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.addToCart]}
          onPress={() => {
            dispatch(addToCart(product));
          }}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  detailsContainer: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  startWithUppercase: {
    textTransform: 'capitalize',
  },
  buttonsContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    width: '45%',
    height: 50,
    borderRadius: 25,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNow: {
    backgroundColor: 'blue',
  },
  addToCart: {
    backgroundColor: 'orange',
  },
});
