import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div><Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse