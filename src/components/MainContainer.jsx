import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[1];
    // console.log(mainMovie)
  return (
    <div>
        <VideoTitle title={mainMovie.title} overview={mainMovie.overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer