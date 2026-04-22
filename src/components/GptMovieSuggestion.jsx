import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovies, gptMoviesResult } = useSelector((store) => store.gpt);

  return (
    <>
      {gptMovies?.length > 0 && (
        <div className="bg-black/80 p-5 m-5">
          {gptMovies.map((movie, index) => (
            <MovieList
              key={movie}
              title={movie}
              movies={gptMoviesResult[index].results}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GptMovieSuggestion;
