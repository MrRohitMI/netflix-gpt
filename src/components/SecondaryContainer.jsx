import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesList = useSelector(store => store.movie)
  return (
    <div className='bg-black'>
      <div className='-mt-70 relative z-20'>
        <MovieList title="Now Playing" movies={moviesList?.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={moviesList?.topRatedMovies} />
        <MovieList title="Popular" movies={moviesList?.popularMovies} />
        <MovieList title="Upcoming Movies" movies={moviesList?.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer