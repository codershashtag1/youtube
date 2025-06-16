import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: "Menu",
    initialState: {
        isMiniSideBarMenuOpen: false
    },
    reducers: {
        toggleMiniSideBarMenu: (state) => {
            state.isMiniSideBarMenuOpen = !state.isMenuOpen
        },
        setMiniSideBarMenuFlagToFalse: (state) => {
            state.isMiniSideBarMenuOpen = false;
        }
    }
})

export const { toggleMiniSideBarMenu, setMiniSideBarMenuFlagToFalse } = MenuSlice.actions;
export default MenuSlice.reducer;

