import React from 'react';
import { ProductCard } from "../productCard/index";

interface Product {
    _id: number,
    price: number,
    discount: number,
    name: string,
    image: string,
}

interface Props {
    products: Product[],
}

export const AllProductsBlock: React.FC<Props> = ({products}) => {
    return (
        <div className="all-products-block">
            {products && products.map((item: Product) => {
                return <ProductCard product={item}/>
            })}
        </div>
    );
}