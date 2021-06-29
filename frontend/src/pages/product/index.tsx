import React, { useEffect } from 'react';
import { FullHeader } from "../../components/fullHeader/index";
import { Footer } from "../../components/footer/index";
import { ImagesSlider } from "../../components/imagesSlider/index";
import { ProductInfo } from "../../components/productInfo/index";
import YouCanLikeContainer from './../../components/youCanLike/container';
import { Product } from "../../interafaces";

interface Props {
    product: Product,
    loadProduct: (id: string) => void,
}

export const ProductPage: React.FC<Props> = ({product, loadProduct}) => {
    const url = window.location.href;
    const splitedUrl = url.split("/");
    const id = splitedUrl[splitedUrl.length - 1]; 
    useEffect(() => loadProduct(id), [loadProduct]);


    return (
        <>
            <FullHeader/>
            <div className="container" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: "35px"}}>
                {product.images ? <ImagesSlider images={product.images} /> : ""}
                <ProductInfo info={product} />
                <YouCanLikeContainer subCategoryId={product.subCategoryId} id={product.id} />
            </div>
            <Footer/>
        </>
    )
}