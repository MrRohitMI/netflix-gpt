import { useState } from "react";
import { BACKDROP_IMG } from "./utils/constants";
import VideoBackground from "./VideoBackground";

const MovieCard = ({ img_path, movieId }) => {
  const [open, setOpen] = useState(false);

  if (!img_path) return null;
  return (
    <>
      <div className="flex-shrink-0" onClick={() => setOpen(true)}>
        <img
          src={BACKDROP_IMG + img_path}
          alt="Poster"
          className="w-40 md:w-55 hover:-mt-3 hover:opacity-70"
        />
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-5 rounded-lg w-10/12">
            <div className="flex justify-end items-center">
              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded mb-3 text-sm md:text-base"
              >
                Close
              </button>
            </div>
            <div className="*:p-0">
              <VideoBackground movieId={movieId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
