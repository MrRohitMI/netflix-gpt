import { useSelector } from 'react-redux';
import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies.js';
import usePopularMovies from './hooks/usePopularMovies.js';
import useTopRatedMovies from './hooks/useTopRatedMovies.js';
import useUpcomingMovies from './hooks/useUpcomingMovies.js';
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';
import GptSearchPage from './GptSearchPage.jsx';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const showGpt = useSelector(store => store.gpt.showGptSearch)
  return (
    <div><Header/>
    {showGpt ? <GptSearchPage/> :
    <><MainContainer/>
    <SecondaryContainer/></>}
    </div>
  )
}

export default Browse