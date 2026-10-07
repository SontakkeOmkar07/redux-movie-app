import { configureStore } from '@reduxjs/toolkit'
import  watchListReducer  from '../features/watchlist/watchlistSlice'
import  filterReducer  from '../features/filters/filterSlice'
import  movieReducer  from '../features/movies/movieSlice'

export const store = configureStore({
  reducer: {
    watchLists: watchListReducer,
    filters: filterReducer,
    movies: movieReducer
  }
})