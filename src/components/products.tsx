import {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ProductCard from './productCard';
import Loader from './loader';

import {getProducts} from '../services/products';
import {Product} from '../modals/product';
import {addToProducts} from '../../store/product';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

interface RProps {
  item: Product;
}

const Products = () => {
  const products = useAppSelector(state => state.product.products);
  const category = useAppSelector(state => state.product.selectedCategory);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addToProducts([]));
    getProducts(category).then(res => {
      if (res?.data?.products?.length) {
        dispatch(addToProducts(res.data.products));
      }
    });
  }, [category]);

  const renderItem = ({item}: RProps) => {
    return (
      <ProductCard
        product={item}
        navigate={() => {
          navigation.navigate('ProductDetails');
        }}></ProductCard>
    );
  };

  if (products.length) {
    return (
      <FlatList
        data={products}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => `product_${item.id}`}
      />
    );
  }
  return (
    <View style={styles.loader}>
      <Loader></Loader>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 50,
  },
});

export default Products;
