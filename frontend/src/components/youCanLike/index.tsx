import React, { useEffect } from "react";
import "./youCanLike.css";
import { ProductCard } from "../productCard/index";
import { Product } from "../../interafaces";

interface Props {
    youCanLikeProducts: Array<Product>,
    loadYouCanLike: (subCategoryId: string) => void,
    subCategoryId: string,
    id: string,
}

export const YouCanLike: React.FC<Props> = ({loadYouCanLike, youCanLikeProducts, subCategoryId, id}) => {
    useEffect(() => loadYouCanLike(subCategoryId), [subCategoryId, loadYouCanLike]);

    return (
        <div className="you-can-like">
            <h1>Вам может понравиться</h1>
            <div className="you-can-like-products">
                {youCanLikeProducts && youCanLikeProducts.map((item: Product) => {
                    return item.id != id ?  <ProductCard product={item} key={item.id} /> : ""
                })}
            </div>
        </div>
    )
}