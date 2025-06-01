import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalogSlice';
import { itemCardReducer } from './itemCardSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    itemCard: itemCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
