import { configureStore } from "@reduxjs/toolkit";
import { videosReducer } from "./VideosSlice";

const appStore = configureStore({
    reducer: {
        videos: videosReducer
    }
})

export default appStore