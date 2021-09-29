import {createSlice} from "@reduxjs/toolkit";

export const temploginSlice = createSlice({
    name:"user",
    initialState:{
        tempuser:'me',
        id:'11',

        },
    reducers:{
        templogin: (state,action) => {
            state.tempuser=action.payload;
        },

        templogout:(state) => {
            state.tempuser='me';
        },
    },
}); 

export const {templogin,templogout}= temploginSlice.actions;

export const selectTempUser = (state) => state.templogin.tempuser 

export default temploginSlice.reducer;

