import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";



const store = configureStore({
    reducer: rootReducer,
})

export default store

export type IAppDispatch = typeof store.dispatch;

export type IRootState = ReturnType<typeof rootReducer>;