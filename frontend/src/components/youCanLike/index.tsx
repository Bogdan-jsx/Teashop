import React from "react";
import "./youCanLike.css";
import { ProductCard } from "../productCard/index";
import { Product } from "../../interafaces";

export const YouCanLike: React.FC = () => {
    // const youCanLikeProducts: Array<Product> = [
    //     {
    //         price: 360,
    //         discount: 45,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     },
    //     {
    //         price: 360,
    //         discount: 45,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     },
    //     {
    //         price: 360,
    //         discount: 45,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     },
    //     {
    //         price: 360,
    //         discount: 45,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     }
    // ]

    return (
        <div className="you-can-like">
            <h1>Вам может понравиться</h1>
            <div className="you-can-like-products">
                {/* {youCanLikeProducts && youCanLikeProducts.map((item: Product) => {
                    return <ProductCard product={item} />
                })} */}
            </div>
        </div>
    )
}