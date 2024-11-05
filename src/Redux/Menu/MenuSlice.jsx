import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";
const url = config.API
export const fetchMenu = createAsyncThunk("/Menu/fetch", async()=>{
    const res = await axios.get(`${url}/menu`);
    return res.data;
})
const MenuSlice = createSlice({
    name:"menu",
    initialState:{
        menu:[],
        loading : true,
        error : "",
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMenu.fulfilled,(state,action)=>{
            state.menu = action.payload;
            state.loading = false;
        }).addCase(fetchMenu.pending,(state,action)=>{
            state.loading = true;
        }).addCase(fetchMenu.rejected,(state,action)=>{
            state.error = "error";
            state.loading = true;
        }); 
    }
})
 
export default MenuSlice.reducer;