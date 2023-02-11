export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY'
export const GET_PRODUCTS_BY_ID = 'GET_PRODUCTS_BY_ID'
export const INC_LOADER_COUNT = 'INC_LOADER_COUNT'
export const DEC_LOADER_COUNT = 'DEC_LOADER_COUNT'


export interface IGetProductsParams {
    sort?: string
    limit?: number
}

export interface IGetProductsByCategoryParams {
    category: string
    params: IGetProductsParams
}


export interface IProduct {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
    rating: IProductRating
}


interface IProductRating {
    rate: number
    count: number
}