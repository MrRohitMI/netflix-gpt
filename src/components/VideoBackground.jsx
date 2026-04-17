import { useSelector } from 'react-redux';
import useMovieTrailer from './hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

    const trailerKey = useSelector(store => store.movie?.trailerVideo)
    useMovieTrailer(movieId);
    return (
        <div>
            <iframe
                className='w-full aspect-video'
                src={`https://www.youtube.com/embed/${trailerKey}?si=2ejil8UZwJ0QaEzT?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground