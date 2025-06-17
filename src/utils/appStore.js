import { configureStore } from "@reduxjs/toolkit";
import { videosReducer } from "./VideosSlice";
import  MenuSlice from "./MenuSlice";
import searchSlice from "./SearchSlice";

const appStore = configureStore({
    reducer: {
        videos: videosReducer,
        menu: MenuSlice,
        search: searchSlice
    }
})

export default appStore