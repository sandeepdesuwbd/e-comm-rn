import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  decreaseCartItem,
  increaseCartItem,
  placeOrder,
} from '../../store/product';
import ImageComponent from '../components/imagesComponent';

const CartScreen = (): JSX.Element => {
  const cart = useAppSelector(state => state.product.cart);
  const navigation = useNavigation();
  if (cart.length === 0) {
    return (
      <View style={styles.emptyCart}>
        <Text> Your cart is empty</Text>
        <TouchableOpacity
          style={[styles.button, styles.HomeButton]}
          onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const dispatch = useAppDispatch();
  const totalAmount = cart.reduce((a, b) => a + b.count * b.product.price, 0);
  const priceDetails = cart.map((item, index) => {
    return (
      <View key={`priceDetails_${index}`} style={styles.payment}>
        <View style={{width: 110, flexDirection: 'row'}}>
          <Text>{index + 1} .</Text>
          <Text style={{textTransform: 'capitalize'}}>
            {item.product.title}
          </Text>
        </View>
        <Text> QTY : {item.count}</Text>
        <Text>${item.product.price * item.count}</Text>
      </View>
    );
  });
  const items = cart.map((item, index) => {
    return (
      <View key={`cart_${index}`} style={styles.cartCard}>
        <ImageComponent src={item.product.images[0]} />
        <View style={styles.itemDetails}>
          <Text style={[styles.bold, {textTransform: 'capitalize'}]}>
            {item.product.title}
          </Text>
          <Text style={styles.bold}>Price: ${item.product.price}</Text>
          <View style={styles.count}>
            <Text style={styles.bold}>Count: </Text>
            <TouchableOpacity
              style={styles.countButton}
              onPress={() => dispatch(decreaseCartItem(item))}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{item.count}</Text>
            <TouchableOpacity
              style={styles.countButton}
              onPress={() => dispatch(increaseCartItem(item))}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  });
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.bold}>Products</Text>
      <ScrollView style={styles.items}>{items}</ScrollView>
      <Text style={[styles.bold, {marginTop: 10}]}>Payment Details</Text>
      <View style={styles.paymentDetails}>
        <View>{priceDetails}</View>
        <View style={styles.hr}></View>
        <View style={styles.payment}>
          <Text>Total</Text>
          <Text>${totalAmount}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(placeOrder({}));
            navigation.navigate('BuyNow');
          }}>
          <Text style={styles.buttonText}>Proceed to buy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
  },
  cartCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    marginTop: 10,
  },
  itemDetails: {
    marginLeft: 20,
  },
  items: {
    maxHeight: 320,
  },
  bold: {
    fontWeight: 'bold',
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countButton: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  paymentDetails: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 20,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  hr: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  emptyCart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    borderRadius: 20,
  },
  HomeButton: {
    backgroundColor: 'white',
    marginTop: 20,
  },
});

export default CartScreen;
