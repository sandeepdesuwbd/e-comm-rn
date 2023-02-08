import {useEffect} from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';
import Loader from './loader';

import {getCategories} from '../services/categories';
import {addCategories, setSelectedCategory} from '../../store/product';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

const Categories = () => {
  const categories = useAppSelector(state => state.product.categories);
  const cat = useAppSelector(state => state.product.selectedCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCategories().then((res: any) => {
      if (res?.data?.length) {
        res.data.unshift('All');
        dispatch(addCategories(res.data));
      }
    });
  }, []);

  const sendSelectedCategory = (item: string) => {
    dispatch(setSelectedCategory(item));
  };

  const renderItem = (item: {item: string}) => {
    const selectedCatStyle = cat === item.item ? styles.selected : {};
    return (
      <TouchableOpacity
        style={[styles.item, selectedCatStyle]}
        onPress={() => sendSelectedCategory(item.item)}>
        <Text style={styles.title}>{item.item}</Text>
      </TouchableOpacity>
    );
  };

  if (categories.length) {
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => `item_${item}`}
        />
      </View>
    );
  }
  return <Loader></Loader>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  item: {
    padding: 10,
    margin: 5,
  },
  selected: {
    backgroundColor: '#FBD9E0',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    borderColor: '#FBD9E0',
  },
  title: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default Categories;
