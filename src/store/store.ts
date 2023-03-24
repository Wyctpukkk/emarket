import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sortReducer from './reducers/sortSlice';
import cartReducer from './reducers/cartSlice';

const rootReducer = combineReducers({
  sortReducer,
  cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
