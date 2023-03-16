import { configureStore } from '@reduxjs/toolkit';
import stocksSlice from './stock/stocksSlice';

export const store = configureStore({
  reducer: {
    stocks: stocksSlice,
  },
});
