import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStocks = createAsyncThunk('data/fetchStocks', async () => {
  try {
    const { data } = await axios.get(
      `https://cloud.iexapis.com/stable/stock/market/collection/tag?collectionName=Airlines&token=pk_3d8b489c0f574c189232b600e1599434`,
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
  reducers: {
    updateList: (state, action) => {
      state.stocks = action.payload;
    },
  },
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

export const { updateList } = stocksSlice.actions;

export default stocksSlice.reducer;
