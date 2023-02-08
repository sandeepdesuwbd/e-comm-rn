import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../src/modals/product';

interface ProductState {
  products: Product[];
  cart: Product[];
  categories: string[];
  selectedCategory: string;
  selectedProduct: Product;
}

const ProductSclice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    cart: [],
    categories: [],
    selectedCategory: 'All',
    selectedProduct: {
      brand: '',
      category: '',
      description: '',
      discountPercentage: 0,
      id: 0,
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      thumbnail: '',
      title: '',
    },
  } as ProductState,
  reducers: {
    addToProducts: (state, action) => {
      return {...state, products: action.payload};
    },
    addToCart: (state, action) => {
      const cartList = [...state.cart];
      const product = action.payload;
      cartList.push(product);
      return {...state, cart: cartList};
    },
    addCategories: (state, action) => {
      return {...state, categories: action.payload};
    },
    setSelectedCategory: (state, action) => {
      return {...state, selectedCategory: action.payload};
    },
    addProduct: (state, action) => {
      return {...state, selectedProduct: action.payload}
    },
  },
});

export default ProductSclice.reducer;

export const {
  addToProducts,
  addToCart,
  addCategories,
  setSelectedCategory,
  addProduct,
} = ProductSclice.actions;
