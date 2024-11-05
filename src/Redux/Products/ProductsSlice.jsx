import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";
import { mutate } from "swr";
let url = config.API;
export const fetchProducts = createAsyncThunk("/Products/fetch", async () => {
  const res = await axios.get(`${url}/products`);
  return res.data;
});
export const addProduct = createAsyncThunk(
  "/Product/add",
  async (newProduct) => {
    const res = await axios.post(`${url}/products`, newProduct);
    mutate(`${url}/products`);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk("/Product/delete", async (id) => {
  await axios.delete(`${url}/products/${id}`);
  mutate(`${url}/products`);
  console.log(id);
  return id;
});

export const editProduct = createAsyncThunk(
  "/Product/edit",
  async ({ id, updatedData }) => {
    const res = await axios.put(`${url}/products/${id}`, updatedData);
    mutate(`${url}/products`);
    return res.data;
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    // fetch data------------>
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = "error fetching products";
        state.loading = true;
      })// add data --------->
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.loading = false;
    })
    .addCase(addProduct.pending, (state) => {
        state.loading = true;
    })
    .addCase(addProduct.rejected, (state) => {
        state.error = "Error adding product";
        state.loading = false;
    }) // delete data ------->
    .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(item => item.id !== action.payload);
        state.loading = false;
    })
    .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
    })
    .addCase(deleteProduct.rejected, (state) => {
        state.error = "Error deleting product";
        state.loading = false;
    }) // edit data --------->
    .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
            state.products[index] = action.payload;
        }
        state.loading = false;
    })
    .addCase(editProduct.pending, (state) => {
        state.loading = true;
    })
    .addCase(editProduct.rejected, (state) => {
        state.error = "Error editing category";
        state.loading = false;
    });
      
  },
});

export default ProductsSlice.reducer;
