import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        showGptSearch : false,
        gptMoviesResult: [],
        gptMovies: []
    },
    reducers: {
        toggleGptBtn: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGPTMovies: (state, actions) => {
            const {movies,result} = actions.payload;
            state.gptMovies = movies;
            state.gptMoviesResult = result;
        }
    }
});

export const {toggleGptBtn ,addGPTMovies} = gptSlice.actions; 

export default gptSlice.reducer;