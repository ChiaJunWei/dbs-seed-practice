import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:'me',
        id:'11'
        // give initalState to prevent app crash

    },
    reducers:{
        login: (state,action) => {
            state.user=action.payload;
        },

        logout:(state) => {
            state.user='me';
        },
    },
});

export const {login,logout}= userSlice.actions;

export const selectUser = (state) => state.user.user

export default userSlice.reducer;

