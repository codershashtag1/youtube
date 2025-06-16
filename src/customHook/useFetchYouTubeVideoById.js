import { useEffect } from 'react';
import { YOUTUBE_API_BY_ID } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setSelectedVideo } from '../utils/VideosSlice';

export const useFetchYouTubeVideoById = async (videoId) => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(YOUTUBE_API_BY_ID + `&id=${videoId}`);
            const data = await res.json();
            // console.log(data);
            dispatch(setSelectedVideo(data.items));
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

}