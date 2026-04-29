import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerKey = useSelector((store) => store.movie?.trailerVideo[movieId]);
  return (
    <div className="pt-35 md:pt-0">
      {trailerKey ? (
        <iframe
          key={movieId}
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerKey}?si=2ejil8UZwJ0QaEzT?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      ) : (
        <div className="bg-gray-300 w-full aspect-video animate-pulse"></div>
      )}
    </div>
  );
};

export default VideoBackground;
