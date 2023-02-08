import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions";

interface iInitialState {
    categories: Array<String>
}
const initialState: iInitialState = {
    categories: []
}

const categoriesSlice =
    createSlice({
        name: 'categories',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
        },
    })


export default categoriesSlice.reducer;