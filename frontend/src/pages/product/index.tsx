import React from 'react';
import { FullHeader } from "../../components/fullHeader/index";
import { Footer } from "../../components/footer/index";
import { ImagesSlider } from "../../components/imagesSlider/index";
import { ProductInfo } from "../../components/productInfo/index";
import { YouCanLike } from "../../components/youCanLike/index";

interface FullProductInfo {
    title: String,
    vendorCode: String,
    price: number,
    discount: number,
    effect: String,
    appearance: String,
    howToBrew: String,
    type: String,
    taste: String
    images: Array<String>,
}

export const ProductPage: React.FC = () => {
    const fullInfo: FullProductInfo = {
        title: "Шу «Айлаошань 0919», 100г, 2016 г. Леопард из серии «Буфан» от TeaShop.by",
        vendorCode: "005053",
        price: 260,
        discount: 45,
        effect: "Тонизирует, согревает тело",
        appearance: "Кирпич (спресованный)",
        howToBrew: "Идеален для варки на огне",
        type: "Хэйча",
        taste: "Пряный, “теплый”",
        images: [
            "tea-2.jpg",
            "tea-3.jpg",
            "tea-2.jpg",
            "tea-3.jpg",
            "tea-2.jpg",
        ]
    }

    return (
        <>
            <FullHeader/>
            <div className="container" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: "35px"}}>
                <ImagesSlider images={fullInfo.images} />
                <ProductInfo info={fullInfo} />
                <YouCanLike />
            </div>
            <Footer/>
        </>
    )
}