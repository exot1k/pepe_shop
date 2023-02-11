import { useParams, } from "react-router-dom";
import { useProducts } from "../../hooks/products";
import useQuery from "../../hooks/query";
import './PageContent.scss'
import { PageHeader } from "./PageHeader/Product/PageHeader";
import {  ProductCard } from "./ProductCard/ProductCard";

export function PageContent() {
    let params = useParams();
    let query = useQuery()
    let sort = query.get("sort") ?? undefined
    let { products } = useProducts({ sort }, params.category)
    if (!products.length) return null;
    return (
        <>
            
            <PageHeader title={params.category} />
            <div className="page-content-product-table">
                {products.map((i) => {
                    return <ProductCard product={i} key={i.id}/>
                })}
            </div>
        </>
    )
}

