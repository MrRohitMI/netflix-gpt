import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from './utils/constants';

const VideoBackground = ({ movieId }) => {

    const [trailerKey, setTrailerKey] = useState(null);
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const filteredData = json.results.filter((video) => video.type == "Trailer")
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        setTrailerKey(trailer.key)
    }
    useEffect(() => {
        getMovieVideos()
    }, [])
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}?si=2ejil8UZwJ0QaEzT`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground