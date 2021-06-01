import React from "react";
import "./allProductsPage.css";
import { FullHeader } from "../../components/fullHeader/index";
import { AllProductsCatalog } from "../../components/allProductsCatalog/index";
import { AllProductsHeader } from "../../components/allProductsHeader/index";
import { AllProductsBlock } from "../../components/allProductsBlock/index";
import { Footer } from "../../components/footer/index";
import { Product } from "../../interafaces";

export const AllProductsPage: React.FC = () => {
    // const products: Product[] = [
    //     {
    //         _id: 1,
    //         price: 360,
    //         discount: 0,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     },
    //     {
    //         _id: 2,
    //         price: 360,
    //         discount: 45,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     },
    //     {
    //         _id: 3,
    //         price: 360,
    //         discount: 45,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     },
    //     {
    //         _id: 4,
    //         price: 360,
    //         discount: 45,
    //         name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
    //         image: "./tea-1",
    //     }
    // ];
    return (
        <>
            <FullHeader />
            <div className="container all-products-container">
                <AllProductsHeader /> 
                <div className="all-products-body">
                    <AllProductsCatalog />
                    {/* <AllProductsBlock products={products} /> */}
                </div>  
            </div>
            <Footer />
        </>
    )
}