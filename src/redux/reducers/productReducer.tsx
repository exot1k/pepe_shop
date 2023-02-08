import { createSlice } from "@reduxjs/toolkit";
import {  getProducts, getProductsByCategory } from "../actions";
import { IProduct } from "../types";

interface iInitialState {
    products: Array<IProduct>
}
const initialState: iInitialState = {
    products: []
}

const categoriesSlice =
    createSlice({
        name: 'categories',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
            }) 
            builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.products = action.payload
            })
        },
    })


export default categoriesSlice.reducer;