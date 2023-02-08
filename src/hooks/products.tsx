import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByCategory } from "../redux/actions";
import { IAppDispatch, IRootState } from "../redux/store";
import { IGetProductsParams, IProduct } from "../redux/types";


export function useProducts(productsParams: IGetProductsParams, category?: string) {

    function _getProducts(category?: string) {
            category !== undefined ?
            dispatch(getProductsByCategory({ category, params: productsParams })) :
            dispatch(getProducts(productsParams))
    }

    const dispatch = useDispatch<IAppDispatch>()
    const products: IProduct[] = useSelector((state: IRootState) => {
        return state.product.products
    })

    useEffect(() => {
        _getProducts(category)
    }, [])

    useEffect(() => {
        _getProducts(category)
    }, [productsParams.sort, productsParams.limit, category])

    return { products }
}