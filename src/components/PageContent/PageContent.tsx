import { useParams, } from "react-router-dom";
import { useProducts } from "../../hooks/products";
import useQuery from "../../hooks/query";
import './PageContent.scss'
import { PageHeader } from "./PageHeader/Product/PageHeader";
import { Product } from "./Product/Product";

export function PageContent() {
    let params = useParams();
    let query = useQuery()
    let sort =  query.get("sort") ?? undefined

    let { products } = useProducts({ sort },params.category )

    return (
        <>
            <PageHeader title={params.category} />
            <div className="page-content-product-table">
                {products.map((i) => {
                    return <Product product={i} />
                })}
            </div>
        </>
    )
}

