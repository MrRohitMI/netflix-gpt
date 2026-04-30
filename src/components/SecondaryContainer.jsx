import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import NetflixShimmer from './NetflixShimmer';

const SecondaryContainer = () => {
  const loading = useSelector((store) => store.movie.loading);
  const error = useSelector((store) => store.movie.error);

  const moviesList = useSelector(store => store.movie)
  return (
    <div className='bg-black'>
      {!loading && !error &&
      <div className='lg:-mt-70 relative z-20'>
        <MovieList title="Now Playing" movies={moviesList?.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={moviesList?.topRatedMovies} />
        <MovieList title="Popular" movies={moviesList?.popularMovies} />
        <MovieList title="Upcoming Movies" movies={moviesList?.upcomingMovies} />
      </div>}
    </div>
  )
}

export default SecondaryContainer