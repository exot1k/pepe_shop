import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducts, getProductsByCategory, setLoader } from "../redux/actions";
import { IRootState } from "../redux/store";
import { IGetProductsParams, IProduct } from "../redux/types";
import { useLoaderWrap } from "./loader";

export function useProducts(productsParams: IGetProductsParams, category?: string) {

    const products: IProduct[] = useSelector((state: IRootState) => {
        return state.product.products
    })
    const getProductsByCategoryWithLoader = useLoaderWrap<typeof getProductsByCategory>(getProductsByCategory)
    const getProductsWithLoader = useLoaderWrap<typeof getProducts>(getProducts)

    async function _getProducts(category?: string) {
        category !== undefined ?
            getProductsByCategoryWithLoader({ category, params: productsParams }) :
            getProductsWithLoader(productsParams)
    }

    useEffect(() => {
        _getProducts(category)
    }, [productsParams.sort, productsParams.limit, category])

    return { products }
}