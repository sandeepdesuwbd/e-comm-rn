import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../src/modals/product';
import {Cart} from '../src/modals/cart';

interface ProductState {
  products: Product[];
  cart: Cart[];
  categories: string[];
  selectedCategory: string;
  selectedProduct: Product;
}

const ProductSclice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    cart: [],
    buy: {
      products: [],
      totalAmount: 0,
      totalQuantity: 0,
    },
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
    Orders: {},
  } as ProductState,
  reducers: {
    addToProducts: (state, action) => {
      return {...state, products: action.payload};
    },
    addToCart: (state, action) => {
      const cartList = [...state.cart];
      const product = action.payload;
      const findIndex = cartList.findIndex(item => item.id === product.id);
      if (findIndex >= 0) {
        const cart = {...cartList[findIndex]};
        cart.count++;
        cartList[findIndex] = cart;
      } else {
        cartList.push({
          id: product.id,
          product: product,
          count: 1,
        });
      }
      return {...state, cart: cartList};
    },
    addCategories: (state, action) => {
      return {...state, categories: action.payload};
    },
    setSelectedCategory: (state, action) => {
      return {...state, selectedCategory: action.payload};
    },
    addProduct: (state, action) => {
      return {...state, selectedProduct: action.payload};
    },
    increaseCartItem: (state, action) => {
      const cartList = [...state.cart];
      const cartItem = action.payload;
      const findIndex = cartList.findIndex(item => item.id === cartItem.id);
      if (findIndex >= 0) {
        const cart = {...cartList[findIndex]};
        cart.count++;
        cartList[findIndex] = cart;
      }
      return {...state, cart: cartList};
    },
    decreaseCartItem: (state, action) => {
      const cartList = [...state.cart];
      const cartItem = action.payload;
      const findIndex = cartList.findIndex(item => item.id === cartItem.id);
      if (findIndex >= 0) {
        const cart = {...cartList[findIndex]};
        if (cart.count === 1) {
          cartList.splice(findIndex, 1);
        } else {
          cart.count--;
          cartList[findIndex] = cart;
        }
      }
      return {...state, cart: cartList};
    },
    placeOrder: (state, action) => {
      return {...state, cart: []};
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
  increaseCartItem,
  decreaseCartItem,
  placeOrder,
} = ProductSclice.actions;
