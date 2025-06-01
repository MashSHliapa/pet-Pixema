import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestItemCard } from '../services/posts';
import type { DataItemCardResponse } from '../types/interfaces';

export const fetchItemCard = createAsyncThunk('itemCard/fetchItemCard', async ({ imdbID }: { imdbID: string }) => {
  return await requestItemCard(imdbID);
});

const itemCardSlice = createSlice({
  name: 'itemCard',
  initialState: {
    loading: false,
    error: null,
    data: {},
  } as DataItemCardResponse,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItemCard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItemCard.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchItemCard.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export const itemCardReducer = itemCardSlice.reducer;
