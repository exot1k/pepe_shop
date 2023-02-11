import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

export function Routers() {
    return (
        <>
            <Routes>
                <Route path='/all' element={<MainPage />} />
                <Route path='/category/:category' element={<MainPage />} />
                <Route path='/products/:id' element={<ProductDetail />} />
                <Route path='/about' element={<div> test </div>} />
                <Route path={"*"} element={<Navigate to="/all" />} />
            </Routes>
        </>
    )
}