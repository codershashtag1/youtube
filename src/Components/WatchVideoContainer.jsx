import { useSearchParams } from 'react-router'
import { useSelector } from 'react-redux';
import VideoDetails from './VideoDetails';
import { useFetchYouTubeVideoById } from '../customHook/useFetchYouTubeVideoById';

const WatchVideoContainer = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    
    useFetchYouTubeVideoById(videoId);
    const selectedVideo = useSelector((store) => store.videos.selectedVideo);
    if (!selectedVideo || selectedVideo.length === 0) return <h1 className="text-center text-2xl">No Video Found</h1>;

  return (
    <div>
        <div className='p-4 shadow-red-500'>   
            <iframe 
            width="800" 
            height="415" 
            src={"https://www.youtube.com/embed/" + videoId + "?si=kgSjN-qCXuWu5EX0&autoplay=1"} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className='border-0 rounded-4xl outline-none shadow-lg bg-gradient-to-l from-gray-500 to-black ring-8 ring-neutral-800'
            >
        </iframe>
            <VideoDetails videoDetails={selectedVideo[0]}/>
        </div>
        
    </div>
  )
}

export default WatchVideoContainer