import React from 'react';
import { FullHeader } from "../../components/fullHeader/index";
import { Footer } from "../../components/footer/index";
import { ImagesSlider } from "../../components/imagesSlider/index";
import { ProductInfo } from "../../components/productInfo/index";
import { YouCanLike } from "../../components/youCanLike/index";
import { Product } from "../../interafaces";

export const ProductPage: React.FC = () => {
    // const fullInfo: Product = {
    //     name: "Шу «Айлаошань 0919», 100г, 2016 г. Леопард из серии «Буфан» от TeaShop.by",
    //     vendorCode: "005053",
    //     price: 260,
    //     discount: 45,
    //     effect: "Тонизирует, согревает тело",
    //     appearance: "Кирпич (спресованный)",
    //     brew: "Идеален для варки на огне",
    //     // type: "Хэйча",
    //     taste: "Пряный, “теплый”",
    //     images: [
    //         "tea-2.jpg",
    //         "tea-3.jpg",
    //         "tea-2.jpg",
    //         "tea-3.jpg",
    //         "tea-2.jpg",
    //     ],
    //     id: "123",
    //     subCategoryId: "2134i1jb",
    //     weight: 1200,
    // }

    return (
        <>
            <FullHeader/>
            <div className="container" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: "35px"}}>
                {/* <ImagesSlider images={fullInfo.images} />
                <ProductInfo info={fullInfo} /> */}
                <YouCanLike />
            </div>
            <Footer/>
        </>
    )
}