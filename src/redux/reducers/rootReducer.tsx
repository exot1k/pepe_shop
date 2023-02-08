import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";

export const rootReducer = combineReducers({
    'categories': categoriesReducer,
    'product': productReducer
});