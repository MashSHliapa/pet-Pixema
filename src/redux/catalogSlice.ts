import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCatalog } from '../services/posts';
import type { DataResponse } from '../types/interfaces';

export const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async () => {
  return await requestCatalog();
});

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataResponse,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCatalog.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export const catalogReducer = catalogSlice.reducer;
