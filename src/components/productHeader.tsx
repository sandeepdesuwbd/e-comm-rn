import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../store/hooks';
import {CartCount} from './CartCount';

const ProductHeader = (): JSX.Element => {
  const title = useAppSelector(state => state.product.selectedProduct.title);
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <CartCount />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingRight: 10,
  },
});

export default ProductHeader;
