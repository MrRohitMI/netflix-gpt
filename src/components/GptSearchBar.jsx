import React from 'react'
import lang from './utils/langConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const selectedLanguage = useSelector(store => store.config.selectedLanguage);
    return (
        <div className='pt-[10%]'><form action="" className='w-1/2 bg-black m-auto grid grid-cols-12'>
            <input type="text" placeholder={lang[selectedLanguage].gptSearchPlaceHolder} className='p-4 bg-white m-2 col-span-9 rounded'/>
            <button className='bg-red-600 text-white font-bold rounded-lg p-4 col-span-3 m-2'>{lang[selectedLanguage].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar