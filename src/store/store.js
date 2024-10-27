import { configureStore } from "@reduxjs/toolkit";




export const movieStore = configureStore({
    reducer: {
        // Define your reducers here
    },
    devTools: true, // Enable Redux DevTools
})