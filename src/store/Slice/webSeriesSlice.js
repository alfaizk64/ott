import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
    webSeries:[],
    isLoading:false,
    isError:false
}


export const fetchWebSeriesData = createAsyncThunk("fetchWebSeriesData", async (title)=>{
    const response = await fetch(`https://www.omdbapi.com/?apikey=fa54e057&t=${title}`)
       const webSeries = await response.json();
       return webSeries;
})


export const webSeriesSlice = createSlice({
    name:"webSeriesData",
    initialState:initialState,
    extraReducers: (builder) => {
       builder.addCase(fetchWebSeriesData.pending,(state,action)=>{
        state.isLoading = true;
        state.webSeries.push(action.payload)
       })
       builder.addCase(fetchWebSeriesData.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.webSeries.push(action.payload);
       })
       builder.addCase(fetchWebSeriesData.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError = true;
       })
    }
 
})

export default webSeriesSlice.reducer;