import React, { useEffect } from "react";
import "./youCanLike.css";
import { Product } from "../../interafaces";
import { Loader } from "../loader";
import { Error } from "../error";
import ProductCardContainer from './../productCard/container';

interface Props {
    youCanLikeProducts: Array<Product>,
    loadYouCanLike: (subCategoryId: string) => void,
    subCategoryId: string,
    id: string,
    isLoading: boolean,
    isError: boolean,
}

export const YouCanLike: React.FC<Props> = ({loadYouCanLike, youCanLikeProducts, subCategoryId, id, isLoading, isError}) => {
    useEffect(() => loadYouCanLike(subCategoryId), [subCategoryId, loadYouCanLike]);
    
    return (
        <div className="you-can-like">
            <h1>Вам может понравиться</h1>
            <div className="you-can-like-products">
                {isLoading ? 
                    <Loader/> :
                        !isError ?
                            youCanLikeProducts && youCanLikeProducts.map((item: Product) => {
                                return item.id != id ? <ProductCardContainer product={item} key={item.id} /> : ""
                            }) :
                                <Error/>
                }
            </div>
        </div>
    )
}