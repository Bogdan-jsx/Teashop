import React from 'react';
import { ProductCard } from "../productCard/index";
import { Product } from "../../interafaces";

interface Props {
    products: Product[],
}

export const AllProductsBlock: React.FC<Props> = ({ products }) => {
    return (
        <div className="all-products-block">
            {products && products.map((item: Product) => {
                return <ProductCard product={item} key={item.id} />
            })}
        </div>
    );
}