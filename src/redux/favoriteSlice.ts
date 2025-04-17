// redux/favoriteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsDataType } from "@/type/Types";

interface FavoriteState {
  favorites: CardsDataType[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<CardsDataType>) {
      const exists = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
