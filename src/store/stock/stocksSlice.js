import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStocks = createAsyncThunk('data/fetchStocks', async () => {
  try {
    const { data } = await axios.get(
      `https://cloud.iexapis.com/stable/stock/market/collection/tag?collectionName=Airlines&token=pk_2a93c869660e41f89847d3d0e2edd3d7`,
    );
    return data;
  } catch (error) {
    console.error('Не удалось получить данные:', error);
  }
});

const initialState = {
  stocks: [],
  status: 'loading',
};

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      state.stocks = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(fetchStocks.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export default stocksSlice.reducer;
