import { BACKDROP_IMG } from './utils/constants'

const MovieCard = ({img_path}) => {
  return (
    <div className='flex-shrink-0'><img src={BACKDROP_IMG + img_path} alt='Poster' className='w-55'/></div>
  )
}

export default MovieCard