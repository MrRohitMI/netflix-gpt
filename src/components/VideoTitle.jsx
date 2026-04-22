import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[55%] md:pt-[15%] pl-5 md:pl-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-xl md:text-4xl lg:text-6xl font-bold w-1/3 mb-2 md:mb-4 -mt-10 md:mt-4 lg:mt-0">{title}</h1>
      <p className="text-lg w-1/3 mb-5 hidden lg:block">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black py-2 md:py-3 px-3 md:px-7 rounded md:text-lg font-bold hover:opacity-80 mb-20 md:mb-0">
          ▶︎ Play
        </button>
        <button className="bg-gray-500 text-white py-3 px-7 rounded text-lg font-bold hidden md:block">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
