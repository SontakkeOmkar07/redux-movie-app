import { createSlice } from '@reduxjs/toolkit'
import movies from '../../data/movies'


const initialState = {

  movies: movies,
  search : ""
 
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {

    searchMovies : (state,action) => {


      state.search = action.payload
    }
   
  }
})

export const {searchMovies } = movieSlice.actions

export default movieSlice.reducer