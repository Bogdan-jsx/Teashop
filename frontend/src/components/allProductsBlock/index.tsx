import React from 'react';
import { ProductCard } from "../productCard/index";
import { Product } from "../../interafaces";
import "./style.css";
import { Loader } from '../loader';
import { Error } from '../error/index';

interface Props {
    products: Product[],
    isLoading: boolean,
    isError: boolean,
}

export const AllProductsBlock: React.FC<Props> = ({ products, isLoading, isError }) => {
    return (
        <div className="all-products-block">
            {isLoading ? 
                <Loader/> :
                    !isError ?
                        products && products.map((item: Product) => {
                            return <ProductCard product={item} key={item.id} />
                        }) :
                            <Error/>
            }
        </div>
    );
}