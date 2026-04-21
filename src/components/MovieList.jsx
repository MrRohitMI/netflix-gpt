import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (

        <div><h1 className='text-xl pt-2 pl-2 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hover gap-2 p-2'>
                {movies && movies?.map((movie) => <MovieCard key={movie.id} img_path={movie.poster_path} />)}
            </div>
        </div>


    )
}

export default MovieList