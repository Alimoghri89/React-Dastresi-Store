import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";
import { mutate } from "swr";
const url = config.API
export const fetchMainSlider = createAsyncThunk("/MainSlider/fetch", async()=>{
    const res = await axios.get(`${url}/mainSlider`);
    return res.data;
});

export const addMainSlider = createAsyncThunk("/MainSlider/add", async (newSlider) => {
    const res = await axios.post(`${url}/mainSlider`, newSlider);
    mutate(`${url}/mainSlider`);
    return res.data;
});

export const deleteMainSlider = createAsyncThunk("/MainSlider/delete", async (id) => {
    await axios.delete(`${url}/mainSlider/${id}`);
    mutate(`${url}/mainSlider`);
    return id; 
});

export const editMainSlider = createAsyncThunk("/MainSlider/edit", async ({ id, updatedData }) => {
    const res = await axios.put(`${url}/mainSlider/${id}`, updatedData);
    mutate(`${url}/mainSlider`);
    return res.data; 
});

const MainSliderSlice = createSlice({
    name:"mainSlider",
    initialState:{
        mainSlider:[],
        loading : true,
        error : "",
    },
    extraReducers:(builder)=>{
        // fetch data ---------->
        builder.addCase(fetchMainSlider.fulfilled,(state,action)=>{
            state.mainSlider = action.payload;
            state.loading = false;
        })
        .addCase(fetchMainSlider.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchMainSlider.rejected,(state)=>{
            state.error = "error fetching MainSlider";
            state.loading = true;
        }) // add data --------->
        .addCase(addMainSlider.fulfilled, (state, action) => {
            state.mainSlider.push(action.payload);
            state.loading = false;
        })
        .addCase(addMainSlider.pending, (state) => {
            state.loading = true;
        })
        .addCase(addMainSlider.rejected, (state) => {
            state.error = "Error adding to MainSlider";
            state.loading = false;
        }) // delete data ------->
        .addCase(deleteMainSlider.fulfilled, (state, action) => {
            console.log(action.payload)
            state.mainSlider = state.mainSlider.filter(item => item.id !== action.payload);
            console.log(state.mainSlider)
            state.loading = false;
        })
        .addCase(deleteMainSlider.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteMainSlider.rejected, (state) => {
            state.error = "Error deleting from MainSlider";
            state.loading = false;
        }) // edit data --------->
        .addCase(editMainSlider.fulfilled, (state, action) => {
            const index = state.mainSlider.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.mainSlider[index] = action.payload;
            }
            state.loading = false;
        })
        .addCase(editMainSlider.pending, (state) => {
            state.loading = true;
        })
        .addCase(editMainSlider.rejected, (state) => {
            state.error = "Error editing MainSlider";
            state.loading = false;
        });
    }
})
 
export default MainSliderSlice.reducer;