import {View, StyleSheet} from 'react-native';
import {useAppSelector} from '../../store/hooks';

export const ProductDetailsComponent = (): JSX.Element => {
  const product = useAppSelector(state => state.product.selectedProduct);
  console.log(product);
  const image = {uri:product.images[0]};
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image:{
   flex:1
  }
});
