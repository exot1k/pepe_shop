import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import loaderReducer from "./loaderReducer";
import productReducer from "./productReducer";

export const rootReducer = combineReducers({
    'categories': categoriesReducer,
    'product': productReducer,
    'loader': loaderReducer
});