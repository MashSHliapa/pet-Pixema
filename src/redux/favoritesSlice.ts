import { createSlice } from '@reduxjs/toolkit';
import { getCardFromLocalStorage } from '../helpers/getCardFromLocalStorage';
import { setCardToLocalStorage } from '../helpers/setCardToLocalStorage';
import type { ICardItem } from '../types/interfaces';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: getCardFromLocalStorage('favorites'),
  },
  reducers: {
    addConditionerToFavorites: (state, action) => {
      const favoriteCard = action.payload;
      state.data.push(favoriteCard);
      setCardToLocalStorage('favorites', state.data);
    },

    removeConditionerFromFavorite: (state, action) => {
      const favoriteCard = action.payload;
      const cardIndexDelete = state.data.findIndex((item: ICardItem) => item.imdbID == favoriteCard.imdbID);
      state.data.splice(cardIndexDelete, 1);
      setCardToLocalStorage('favorites', state.data);
    },
  },
});

export const { addConditionerToFavorites, removeConditionerFromFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
