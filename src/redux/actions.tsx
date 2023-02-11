import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { categoryAPI } from "../api/CategoriyAPI";
import { ProductAPI } from "../api/ProuctAPI";
import {
    DEC_LOADER_COUNT,
    GET_CATEGORIES,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCTS_BY_ID,
    IGetProductsByCategoryParams,
    IGetProductsParams,
    INC_LOADER_COUNT
} from "./types";

export const getCategories =
    createAsyncThunk(GET_CATEGORIES,
        async () => {
            const resp = categoryAPI.getCategories()
            return resp
        })


export const getProducts =
    createAsyncThunk(GET_PRODUCTS,
        async (productsParams: IGetProductsParams) => {
            const resp = await ProductAPI.getProducts(productsParams)
            return resp

        })

export const getProductsByCategory =
    createAsyncThunk(GET_PRODUCTS_BY_CATEGORY,
        async (productsByCategoryParams: IGetProductsByCategoryParams) => {
            const resp = ProductAPI.getProductsByCategory(productsByCategoryParams)
            return resp

        })

export const getProductById =
    createAsyncThunk(
        GET_PRODUCTS_BY_ID,
        async (id: number) => {
            return ProductAPI.getProudctById(id)
        }
    )


export function setLoader(func_bool: boolean) {
    const func = func_bool ? INC_LOADER_COUNT : DEC_LOADER_COUNT
    return createAction(func)()
}



