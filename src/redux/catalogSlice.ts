import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCatalog, requestSearchCards } from '../services/posts';
import type { DataCatalogResponse } from '../types/interfaces';

export const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async () => {
  return await requestCatalog();
});

export const fetchSearchCard = createAsyncThunk('catalog/fetchSearchCard', async ({ request }: { request: string }) => {
  return await requestSearchCards(request);
});

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataCatalogResponse,
  reducers: {
    clearSearchState(state) {
      state.error = null;
      state.data = [];
      state.loading = false;
    },
  },

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

    //requestSearchCards
    builder.addCase(fetchSearchCard.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSearchCard.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || action.error.message || 'Unknown error';
    });
  },
});

export const { clearSearchState } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
