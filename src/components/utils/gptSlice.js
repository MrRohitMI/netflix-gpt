import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./movieSlice";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesResult: [],
    gptMovies: [],
    loading: false,
    error: false,
  },
  reducers: {
    toggleGptBtn: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovies: (state, actions) => {
      const { movies, result } = actions.payload;
      state.gptMovies = movies;
      state.gptMoviesResult = result;
    },
    setGptLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    setGptError: (state, actions) => {
      state.error = actions.payload;
    },
  },
});

export const { toggleGptBtn, addGPTMovies, setGptLoading, setGptError } =
  gptSlice.actions;

export default gptSlice.reducer;
