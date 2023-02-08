import { createReducer } from "@reduxjs/toolkit";
import { DEC_LOADER_COUNT, INC_LOADER_COUNT } from "../types";
interface IInitialState {
    queryCount: number
}
const initialState: IInitialState = {
    queryCount: 0
}
const loaderReducer = createReducer(initialState, (builder) => {
    builder.addCase(INC_LOADER_COUNT, (state) => {
        state.queryCount += 1
    })
    builder.addCase(DEC_LOADER_COUNT, (state) => {
        state.queryCount -= 1
    })
})