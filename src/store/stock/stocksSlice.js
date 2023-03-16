import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStocks = createAsyncThunk('data/fetchStocks', async () => {
  try {
    const { data } = await axios.get(
      'https://api.iex.cloud/v1/data/CORE/STOCK_COLLECTION/list?collectionName=mostactive&token=sk_82276cc4b29d483eb4ca6d9b5be4887f',
    );
    return data;
  } catch (error) {
    console.error('Не удалось получить данные:', error);
  }
});

const initialState = {
  stocks: [],
};

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      state.stocks = action.payload;
    });
  },
});

export default stocksSlice.reducer;
