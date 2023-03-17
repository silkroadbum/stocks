import { configureStore } from '@reduxjs/toolkit';
import stocksSlice from './stocks/stocksSlice';

export const store = configureStore({
  reducer: {
    stocks: stocksSlice,
  },
});
