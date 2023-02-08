import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { categoryAPI } from "../api/CategoriyAPI";
import { ProductAPI } from "../api/ProuctAPI";
import {
    DEC_LOADER_COUNT,
    GET_CATEGORIES,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY,
    IGetProductsByCategoryParams,
    IGetProductsParams,
    INC_LOADER_COUNT
} from "./types";

export const getCategories =
    createAsyncThunk(GET_CATEGORIES,
        async (_, thunkAPI) => {
            thunkAPI.dispatch(incLoaderCount)
            const resp = categoryAPI.getCategories()
            thunkAPI.dispatch(decLoaderCount)
            return resp
        })


export const getProducts =
    createAsyncThunk(GET_PRODUCTS,
        async (productsParams: IGetProductsParams, thunkAPI) => {
            thunkAPI.dispatch(incLoaderCount)
            const resp = ProductAPI.getProducts(productsParams)
            thunkAPI.dispatch(decLoaderCount)
            return resp

        })

export const getProductsByCategory =
    createAsyncThunk(GET_PRODUCTS_BY_CATEGORY,
        async (productsByCategoryParams: IGetProductsByCategoryParams, thunkAPI) => {
            thunkAPI.dispatch(incLoaderCount)
            const resp = ProductAPI.getProductsByCategory(productsByCategoryParams)
            thunkAPI.dispatch(decLoaderCount)
            return resp

        })

const incLoaderCount = createAction(INC_LOADER_COUNT)
const decLoaderCount = createAction(DEC_LOADER_COUNT)
