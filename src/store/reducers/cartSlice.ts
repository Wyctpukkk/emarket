import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/IProduct';

interface cartState {
  massiveOfItems: any[];
  totalItems: number;
  totalPrice: number;
}

const initialState: cartState = {
  massiveOfItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNewProduct(state, action: PayloadAction<any>) {
      const findItem = state.massiveOfItems.find(
        (obj) => obj.uid === action.payload.uid
      );
      state.totalItems = state.totalItems + 1;

      if (findItem) {
        findItem.price = findItem.price + action.payload.price;
        state.totalPrice = state.totalPrice + action.payload.price;
        findItem.count = findItem.count! + 1;
      } else {
        console.log(state.massiveOfItems);
        state.totalPrice = state.totalPrice + action.payload.price;
        state.massiveOfItems.push({
          ...action.payload,
          count: 1,
        });
      }
    },
  },
});

export const { addNewProduct } = cartSlice.actions;

export default cartSlice.reducer;
