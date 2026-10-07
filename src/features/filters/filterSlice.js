import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  filterMoviesGenre: "All",
   sortMovie: "default",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterMovies: (state, action) => {
      state.filterMoviesGenre = action.payload;
    },

    sortMovies : (state,action) => {
      state.sortMovie = action.payload;

    }
  },
});

export const { filterMovies,sortMovies } = filterSlice.actions;

export default filterSlice.reducer;
