import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import BackgroundImage from '../assets/BackgroundNetflix.jpg'

const GptSearchPage = () => {
  return (
    <div><div className='absolute -z-10'><img src={BackgroundImage} alt="bg_image" /></div>
    <GptSearchBar/>
    <GptMovieSuggestion/></div>
  )
}

export default GptSearchPage