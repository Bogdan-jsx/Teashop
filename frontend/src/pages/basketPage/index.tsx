import React from "react";
import "./basketPage.css";
import { FullHeader } from "../../components/fullHeader/index";
import { BasketBlock } from "../../components/basketBlock/index";
import { BasketCalc } from "../../components/basketCalc/index";
import { OrderForm } from "../../components/orderForm/index";
import { Footer } from "../../components/footer/index";

interface BasketProduct {
    price: number,
    discount: number,
    name: string,
    image: string,
    totalWeight: number,
    totalPrice: number,
}

export const BasketPage: React.FC = () => {
    const productsInBasket: Array<BasketProduct> = [
        {
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "/tea-1",
            totalWeight: 200,
            totalPrice: 396,
        },
        {
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "/tea-1",
            totalWeight: 200,
            totalPrice: 396,
        },
    ]

    return (
        <>
            <FullHeader />
            <div className="container basket">
                <BasketBlock basketProducts={productsInBasket} />
                <BasketCalc basketProducts={productsInBasket} />
                <OrderForm />
            </div>
            <Footer />
        </>
    )
}