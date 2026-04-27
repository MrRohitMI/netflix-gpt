import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
// import Shimmer from "./Shimmer";
import NetflixError from "./NetflixError";
import NetflixShimmer from "./NetflixShimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  const loading = useSelector((store) => store.movie.loading);
  const error = useSelector((store) => store.movie.error);

  if (loading) return <NetflixShimmer />;

  if (error) return <NetflixError />;

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0] ?? movies[1];                                                                                                                                                                             ;

  return (
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;