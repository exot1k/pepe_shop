import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProductById, getProducts, getProductsByCategory } from "../actions";
import { IProduct } from "../types";

interface iInitialState {
    products: Array<IProduct>
    selectedProduct?: IProduct
}
const initialState: iInitialState = {
    products: [],
    selectedProduct: undefined 
}

const productSlice =
    createSlice({
        name: 'productSlice',
        initialState,
        reducers: {
            setSelectedProduct(state, action: PayloadAction<number | undefined>){
                state.selectedProduct = state.products.find((item) => {
                       return  item.id === action.payload
                })
            }
        },
        extraReducers: (builder) => {
            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
            builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.products = action.payload
            })
            builder.addCase(getProductById.fulfilled, (state, action) => {
                state.selectedProduct = action.payload
            })
        },
    })

export const {setSelectedProduct} = productSlice.actions
export default productSlice.reducer;