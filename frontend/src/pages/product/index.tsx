import React, { useEffect } from 'react';
import { FullHeader } from "../../components/fullHeader/index";
import { Footer } from "../../components/footer/index";
import { ImagesSlider } from "../../components/imagesSlider/index";
import { ProductInfo } from "../../components/productInfo/index";
import YouCanLikeContainer from './../../components/youCanLike/container';
import { Product } from "../../interafaces";
import { Loader } from '../../components/loader';
import { Error } from '../../components/error';

interface Props {
    product: Product,
    loadProduct: (id: string) => void,
    isLoading: boolean,
    isError: boolean,
    increaseBasketCount: () => void,
}

export const ProductPage: React.FC<Props> = ({ product, loadProduct, isLoading, isError, increaseBasketCount }) => {
    const url = window.location.href;
    const splitedUrl = url.split("/");
    const id = splitedUrl[splitedUrl.length - 1]; 
    useEffect(() => loadProduct(id), [loadProduct]);


    return (
        <>
            <FullHeader/>
            <div className="container product-container" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: "35px"}}>
                {isLoading ? 
                    <Loader /> :
                        !isError ?
                            <>
                            {product.images ? <ImagesSlider images={product.images} /> : ""}
                            <ProductInfo info={product} increaseBasketCount={increaseBasketCount} />
                            <YouCanLikeContainer subCategoryId={product.subCategoryId} id={product.id} />
                            </> :
                                <Error />
                }
            </div>
            <Footer/>
        </>
    )
}