import axios from "axios"
import { getCategories } from "../redux/actions"
import { IGetProductsByCategoryParams, IGetProductsParams, IProduct } from "../redux/types"

export const ProductAPI = {
    getProducts: (params: IGetProductsParams) => {

        return axios.get<Array<IProduct>>('https://fakestoreapi.com/products', { params })
            .then(res => res.data)
    },
    getProductsByCategory: ({ category, params }: IGetProductsByCategoryParams) => {
        
        return axios.get<Array<IProduct>>(`https://fakestoreapi.com/products/category/${category}`, { params })
            .then(res => res.data)
    }
}