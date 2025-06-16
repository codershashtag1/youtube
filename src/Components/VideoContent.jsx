import { useFetchYouTubeVideo } from "../customHook/useFetchYouTubeVideo";
import { useSelector } from "react-redux";
import VideoCart from "./VideoCart";
import { Link } from "react-router";

const VideoContent = () => {
    useFetchYouTubeVideo();

    const videos = useSelector((store) => store.videos.videos);
    if (!videos || videos.length === 0) return <h1 className="text-center text-2xl">No Videos Found</h1>;

    return (
        <div className="py-4 flex flex-wrap gap-4">
            {videos?.map((video) => (
                <Link to={"/watch?v=" + video.id}><VideoCart key={video.id} video={video} /></Link>
            ))}
        </div>
    )
}

export default VideoContent