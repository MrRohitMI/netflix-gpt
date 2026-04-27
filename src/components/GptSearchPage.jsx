import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import BackgroundImage from "../assets/BackgroundNetflix.jpg";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BackgroundImage}
          alt="bg_image"
          className="h-screen object-cover w-screen"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
