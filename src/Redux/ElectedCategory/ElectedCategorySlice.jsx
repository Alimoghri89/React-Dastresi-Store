import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";
import { mutate } from "swr";
let url = config.API

export const fetchElectedCategory = createAsyncThunk("/ElectedCategory/fetch", async()=>{
    const res = await axios.get(`${url}/electedCategory`);
    return res.data;
});

export const addElectedCategory = createAsyncThunk("/ElectedCategory/add", async (newCategory) => {
    const res = await axios.post(`${url}/electedCategory`, newCategory);
    mutate(`${url}/electedCategory`)
    return res.data;
});

export const deleteElectedCategory = createAsyncThunk("/ElectedCategory/delete", async (id) => {
    await axios.delete(`${url}/electedCategory/${id}`);
    mutate(`${url}/electedCategory`)
    return id; 
});

export const editElectedCategory = createAsyncThunk("/ElectedCategory/edit", async ({ id, updatedData }) => {
    const res = await axios.put(`${url}/electedCategory/${id}`, updatedData);
    mutate(`${url}/electedCategory`)
    return res.data; 
});

const ElectedCategorySlice = createSlice({
    name:"electedCategory",
    initialState:{
        electedCategory:[],
        loading : true,
        error : "",
    },
    extraReducers:(builder)=>{
        // fetch data ---------->
        builder.addCase(fetchElectedCategory.fulfilled,(state,action)=>{
            state.electedCategory = action.payload;
            state.loading = false;
        })
        .addCase(fetchElectedCategory.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchElectedCategory.rejected,(state)=>{
            state.error = "error fetching categories";
            state.loading = true;
        }) // add data --------->
        .addCase(addElectedCategory.fulfilled, (state, action) => {
            state.electedCategory.push(action.payload);
            state.loading = false;
        })
        .addCase(addElectedCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(addElectedCategory.rejected, (state) => {
            state.error = "Error adding category";
            state.loading = false;
        }) // delete data ------->
        .addCase(deleteElectedCategory.fulfilled, (state, action) => {
            state.electedCategory = state.electedCategory.filter(item => item.id !== action.payload);
            state.loading = false;
        })
        .addCase(deleteElectedCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteElectedCategory.rejected, (state) => {
            state.error = "Error deleting category";
            state.loading = false;
        }) // edit data --------->
        .addCase(editElectedCategory.fulfilled, (state, action) => {
            const index = state.electedCategory.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.electedCategory[index] = action.payload;
            }
            state.loading = false;
        })
        .addCase(editElectedCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(editElectedCategory.rejected, (state) => {
            state.error = "Error editing category";
            state.loading = false;
        });
    }
})
 
export default ElectedCategorySlice.reducer;