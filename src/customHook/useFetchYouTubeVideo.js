import { useEffect } from 'react';
import { YOUTUBE_API } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setVideos } from '../utils/VideosSlice';

export const useFetchYouTubeVideo = async () => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(YOUTUBE_API);
            const data = await res.json();
            console.log(data);
            dispatch(setVideos(data.items));
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

}