import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/IProduct';

interface cartState {
  arrayOfItems: Product[];
  totalItems: number;
  totalPrice: number;
}

const initialState: cartState = {
  arrayOfItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCatalogProduct(state, action: PayloadAction<Product>) {
      const findItem = state.arrayOfItems.find(
        (obj) => obj.uid === action.payload.uid
      );

      state.totalItems = state.totalItems + action.payload.count;

      if (findItem) {
        findItem.price = findItem.price + action.payload.price;
        state.totalPrice = state.totalPrice + action.payload.price;
        findItem.count = findItem.count + action.payload.count;
      } else {
        state.totalPrice = state.totalPrice + action.payload.price;
        state.arrayOfItems.push(action.payload);
      }
    },

    addCartProduct(state, action: PayloadAction<Product>) {
      const findItem = state.arrayOfItems.find(
        (obj) => obj.uid === action.payload.uid
      );

      if (findItem) {
        state.totalItems = state.totalItems + 1;
        findItem.price = findItem.price + action.payload.price / findItem.count;
        state.totalPrice =
          state.totalPrice + action.payload.price / findItem.count;
        findItem.count++;
      }
    },

    removeProduct(state, action: PayloadAction<Product>) {
      state.totalItems = state.totalItems - action.payload.count;
      state.totalPrice = state.totalPrice - action.payload.price;
      state.arrayOfItems = state.arrayOfItems.filter(
        (obj) => obj.uid !== action.payload.uid
      );
    },

    removeOneProduct(state, action: PayloadAction<Product>) {
      const findItem = state.arrayOfItems.find(
        (obj) => obj.uid === action.payload.uid
      );

      if (findItem && findItem.count > 1) {
        findItem.price = findItem.price - action.payload.price;

        state.totalPrice = state.totalPrice - action.payload.price;

        findItem.count--;
        state.totalItems = state.totalItems - 1;
      } else {
        state.totalItems = state.totalItems - action.payload.count;
        state.totalPrice = state.totalPrice - action.payload.price;
        state.arrayOfItems = state.arrayOfItems.filter(
          (obj) => obj.uid !== action.payload.uid
        );
      }
    },

    clearCart(state) {
      state.arrayOfItems = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const {
  addCatalogProduct,
  addCartProduct,
  removeProduct,
  removeOneProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
