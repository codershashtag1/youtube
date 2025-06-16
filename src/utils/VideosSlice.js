import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: null
    },
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
        }
    }
})

export const { setVideos } = videoSlice.actions;
export const videosReducer = videoSlice.reducer;