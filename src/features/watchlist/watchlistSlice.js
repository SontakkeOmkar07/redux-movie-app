import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    watchLists:[],   
  };

export const watchListSlice = createSlice({
  name: 'watchLists',
  initialState,
  reducers: {

    addWatchList : (state,action) => {
        state.watchLists.push(action.payload);

    },
    removeFromWatchList : (state,action) => {

        state.watchLists = state.watchLists.filter((watchList) => watchList.id !== action.payload)

    },
    
  
  }
})

export const {addWatchList,removeFromWatchList} = watchListSlice.actions

export default watchListSlice.reducer