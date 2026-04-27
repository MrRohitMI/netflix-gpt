import React, { useRef } from "react";
import lang from "./utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { client } from "./utils/openai";
import { API_OPTIONS } from "./utils/constants";
import { addGPTMovies, setGptError, setGptLoading } from "./utils/gptSlice";
import NetflixError from "./NetflixError";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.gpt.loading);
  const error = useSelector((store) => store.gpt.error);
  const selectedLanguage = useSelector(
    (store) => store.config.selectedLanguage,
  );
  const searchGptText = useRef(null);
  const searchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      API_OPTIONS,
    );
    const json = data.json();
    return json;
  };
  const handleGptSearchClick = async () => {
    try {
      dispatch(setGptLoading(true));
      dispatch(setGptError(false));
      const response = await client.responses.create({
        model: "gpt-5.4-nano",
        instructions:
          "Act as a Movie Recommendation system and suggest some movie based on input." +
          "Only give me names of 5 movies, comma separated like the example result given ahead." +
          "Example: Sholay, The Godfather, Inception, 3 Idiots, Hera Pheri",
        input: searchGptText.current.value,
      });
      if (!response) {
        throw new Error("API failed");
      }
      const gptMovies = response.output_text.split(", ");
      const gptMoviesData = gptMovies.map((movie) => searchMovie(movie));
      const tmdbMovies = await Promise.all(gptMoviesData);
      dispatch(addGPTMovies({ movies: gptMovies, result: tmdbMovies }));
    } catch {
      dispatch(setGptError(true));
    } finally {
      dispatch(setGptLoading(false));
    }
  };
  if (error) return <NetflixError />;
  return (
    <>
      {loading ? (
        <div className="pt-[45%] md:pt-[10%]">
          <div className="bg-black text-white p-3 text-center w-6/12 md:w-2/12 rounded-2xl animate-pulse m-auto text-xl">
            Searching...
          </div>
        </div>
      ) : (
        <div className="pt-[45%] md:pt-[10%]">
          <form
            action=""
            className="w-11/12 md:w-1/2 bg-black m-auto grid grid-cols-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder={lang[selectedLanguage].gptSearchPlaceHolder}
              className="p-4 bg-white m-2 col-span-9 rounded"
              ref={searchGptText}
            />
            <button
              className="bg-red-600 text-white font-bold rounded-lg p-4 col-span-3 m-2"
              onClick={handleGptSearchClick}
            >
              {lang[selectedLanguage].search}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default GptSearchBar;
