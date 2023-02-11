import { NavLink } from "react-router-dom";
import { IProduct } from "../../../redux/types";
import './ProductCard.scss'
interface IProudctProprs {
    product: IProduct
}
export function ProductCard({ product }: IProudctProprs) {
 
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