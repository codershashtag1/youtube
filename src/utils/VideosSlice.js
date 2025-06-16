import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: null,
        selectedVideo: null
    },
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        setSelectedVideo: (state, action) => {
            state.selectedVideo = action.payload;
        }
    }
})

export const { setVideos, setSelectedVideo } = videoSlice.actions;
export const videosReducer = videoSlice.reducer;