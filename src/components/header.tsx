import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../store/hooks';

export default function Header(): JSX.Element {
  const cartLength = useAppSelector(state => state.product.cart.length);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mainContainer} onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('../../assets/app-icons/lady-icon-3.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}> Jenny </Text>
      </TouchableOpacity>
      <Text style={styles.title}>E-Comm</Text>
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => {
          navigation.navigate('AddToCart');
        }}>
        <Image
          source={require('../../assets/app-icons/add-to-cart.jpeg')}
          style={styles.cartImage}
        />
        <Text style={styles.cartCount}>{cartLength}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: 'lightgray',
  },
  cartImage: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
