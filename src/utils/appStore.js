import { configureStore } from "@reduxjs/toolkit";
import { videosReducer } from "./VideosSlice";
import  MenuSlice from "./MenuSlice";

const appStore = configureStore({
    reducer: {
        videos: videosReducer,
        menu: MenuSlice
    }
})

export default appStore