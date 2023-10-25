import { createSlice } from "@reduxjs/toolkit";

type State = {
    currAccountId: string;
    detailModalVisible: boolean;
};

const initialState: State = {
    currAccountId: "",
    detailModalVisible: false,
};

const accountSlice = createSlice({
    name: "account",

    initialState,

    reducers: {
        setCurrAccountId: (state, { payload }) => {
            state.currAccountId = payload;
        },
        setDetailModalVisible: (state, { payload }) => {
            state.detailModalVisible = payload;
        },
    },
});

export const { setCurrAccountId, setDetailModalVisible } = accountSlice.actions;
export default accountSlice.reducer;
