import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './Slice/movieSlice'
import webReducer from './Slice/webSeriesSlice'


export const store = configureStore({
    reducer: {
        movieData:movieReducer,
        webSeriesData:webReducer

    },
})