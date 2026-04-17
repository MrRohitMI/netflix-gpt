import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies.js';
import usePopularMovies from './hooks/usePopularMovies.js';
import useTopRatedMovies from './hooks/useTopRatedMovies.js';
import useUpcomingMovies from './hooks/useUpcomingMovies.js';
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div><Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse