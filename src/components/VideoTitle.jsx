import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='pt-[15%] pl-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video'>
      <h1 className='text-6xl font-bold w-1/3 mb-4'>{title}</h1>
      <p className='text-lg w-1/3 mb-5'>{overview}</p>
      <div className='flex gap-2'>
        <button className='bg-white py-3 text-black px-7 rounded text-lg font-bold hover:opacity-80'>▶︎ Play</button>
        <button className='bg-gray-500 text-white py-3 px-7 rounded text-lg font-bold'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle