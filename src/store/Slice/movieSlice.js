import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:[],
    isLoading:false,
    isError:false
}

export const fetchMovieData = createAsyncThunk("fetchMovie", async (title)=>{
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=fa54e057&t=${title}`)
        const movieData = await response.json();
        return movieData;
    } catch (error) {
        console.log(error+"Custom Error");
    }
})


const movieSlice = createSlice({
    name:"movieData",
    initialState:initialState,
    extraReducers:(builder) => {
         builder.addCase(fetchMovieData.pending,(state,action)=>{
            state.isLoading=true;
         })

         builder.addCase(fetchMovieData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movies.push(action.payload);

        })
        builder.addCase(fetchMovieData.rejected, (state, action) => {
            state.isError = true;
        })

    }
})




export default movieSlice.reducer;