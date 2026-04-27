import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, setLoading, setError } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addNowPlayingMovies(json.results));
    } catch (err) {
      dispatch(setError(true))
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;