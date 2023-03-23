import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface sortState {
  minPrice: number;
  maxPrice: number;
  search: string;
  category: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: sortState = {
  minPrice: 0,
  maxPrice: 10000,
  search: '',
  category: 0,
  sort: {
    name: 'Названию↓',
    sortProperty: 'titleDown',
  },
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<any>) {
      state.sort = action.payload;
    },
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.maxPrice = action.payload;
    },
  },
});

export const { setSort, setCategory, setSearch, setMinPrice, setMaxPrice } =
  sortSlice.actions;

export default sortSlice.reducer;
