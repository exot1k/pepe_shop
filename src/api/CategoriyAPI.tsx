import axios from "axios"




export const categoryAPI = {
    getCategories: () => {
        return axios.get<Array<String>>('https://fakestoreapi.com/products/categories')
            .then(res => res.data)

    }
}