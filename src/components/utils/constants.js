export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const BACKDROP_IMG = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANG = [
  { identifier: "en", lang: "English" },
  { identifier: "hi", lang: "Hindi" },
  { identifier: "sp", lang: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
