import React from 'react'

const VideoCart = ({ video }) => {
  if(!video) return null;

  const { snippet, statistics } = video || {};
  const { title, channelTitle, thumbnails, description } = snippet || {};

  return (
    <div className='cursor-pointer'>
        <div>
            <img 
                src={thumbnails?.high?.url} 
                alt={title} 
                className="w-90 h-40 object-cover rounded-lg"
            />
        </div>
        <div className='py-4 w-80'>
            <p>{title}</p>
            <p className='text-neutral-600'>{channelTitle}</p>
            <p className='text-neutral-600'>{statistics?.viewCount} views</p>
        </div>
    </div>
    

  )
}

export default VideoCart