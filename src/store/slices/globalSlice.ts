import { createSlice } from "@reduxjs/toolkit";

type State = {
    theme: "light" | "dark";
};

const initialState: State = {
    theme: "light",
};

const globalSlice = createSlice({
    name: "global",

    initialState,

    reducers: {
        setTheme: (state, { payload }) => {
            state.theme = payload;
        },
    },
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;
