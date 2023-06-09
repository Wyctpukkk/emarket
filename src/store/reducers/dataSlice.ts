import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/IProduct';
import { Category } from '../../models/ICategory';

interface dataState {
  database: Product[];
  categoryArray: Category[];
}

const initialState: dataState = {
  database: [],
  categoryArray: [
    { first: 'Уход', second: 'за телом', categoryProperty: 1 },
    { first: 'Уход', second: 'за руками', categoryProperty: 2 },
    { first: 'Уход', second: 'за ногами', categoryProperty: 3 },
    { first: 'Уход', second: 'за лицом', categoryProperty: 4 },
    { first: 'Уход', second: 'за волосами', categoryProperty: 5 },
    { first: 'Средства', second: 'для загара', categoryProperty: 6 },
    { first: 'Средства', second: 'для бритья', categoryProperty: 7 },
    { first: 'Подарочные', second: 'наборы', categoryProperty: 8 },
    { first: 'Гигиеническая', second: 'продукция', categoryProperty: 9 },
    { first: 'Гигиена', second: 'полости рта', categoryProperty: 10 },
    { first: 'Бумажная', second: 'продукция', categoryProperty: 11 },
  ],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Product[]>) {
      state.database = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
