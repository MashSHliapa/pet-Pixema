import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalogSlice';
import { itemCardReducer } from './itemCardSlice';
import { favoritesReducer } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    itemCard: itemCardReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
