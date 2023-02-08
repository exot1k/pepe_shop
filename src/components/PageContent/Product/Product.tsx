import { NavLink } from "react-router-dom";
import productReducer from "../../../redux/reducers/productReducer";
import { IProduct } from "../../../redux/types";
import './Product.scss'
interface IProudctProprs {
    product: IProduct
}
export function Product({ product }: IProudctProprs) {
    console.log(product.id)
    return (
        <>
            <div className="proudct">
                <NavLink to={`/products/${product.id}`}>
                    <div className="product-card content-box">
                        <img src={product.image} alt="Pepshop" />
                        <p>{product.title}</p>
                    </div>
                </NavLink>
            </div>

        </>
    )
}