import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface sortState {
  category: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: sortState = {
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
  },
});

export const { setSort, setCategory } = sortSlice.actions;

export default sortSlice.reducer;
