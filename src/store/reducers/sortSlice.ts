import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface sortState {
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: sortState = {
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
  },
});

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
