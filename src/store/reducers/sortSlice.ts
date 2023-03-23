import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface sortState {
  search: string;
  category: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: sortState = {
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
  },
});

export const { setSort, setCategory, setSearch } = sortSlice.actions;

export default sortSlice.reducer;
