import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductById } from "../redux/actions"
import { setSelectedProduct } from "../redux/reducers/productReducer"
import { IRootState } from "../redux/store"
import { useLoaderWrap } from "./loader"

export const useProduct = (id?: number) => {
    let product = useSelector((state: IRootState) => {
        return state.product.selectedProduct
    })
    const dispatch = useDispatch()
    const getProductWithLoader = useLoaderWrap<typeof getProductById>(getProductById)
    useEffect(() => {
        dispatch(setSelectedProduct(id))
        if (!product && id !== undefined) {
            getProductWithLoader(id)
        }
    }, [])

    return product
}