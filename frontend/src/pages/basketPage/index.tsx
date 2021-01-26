import React, { useState } from "react";
import "./basketPage.css";
import { FullHeader } from "../../components/fullHeader/index";
import { BasketBlock } from "../../components/basketBlock/index";
import { BasketCalc } from "../../components/basketCalc/index";
import { OrderForm } from "../../components/orderForm/index";
import { Footer } from "../../components/footer/index";
import { BasketProductCard } from "../../components/basketProductCard";

interface BasketProduct {
    _id: number,
    price: number,
    discount: number,
    name: string,
    image: string,
    totalWeight: number,
    totalPrice: number,
}

export const BasketPage: React.FC = () => {
    const [productsInBasket, setBasketProducts] = useState<Array<BasketProduct>>([
        {
            _id: 1,
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "/tea-1",
            totalWeight: 200,
            totalPrice: 396,
        },
        {
            _id: 2,
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "/tea-1",
            totalWeight: 200,
            totalPrice: 396,
        },
    ]);

    function editWeight(id: number) {
        return function (weight: number) {
            let temp = productsInBasket;
            temp.forEach((item: BasketProduct) => {
                if (item._id === id) {
                    item.totalWeight = Number(weight);
                    const priceWithDiscount = item.price / 100 * item.discount;
                    const multiplier = item.totalWeight / 100;
                    item.totalPrice = priceWithDiscount * multiplier;
                }
            })
            setBasketProducts(productsInBasket);
            console.log(productsInBasket);
        }
    }

    return (
        <>
            <FullHeader />
            <div className="container basket">
                <BasketBlock basketProducts={productsInBasket} editWeight={editWeight} />
                <BasketCalc basketProducts={productsInBasket} />
                <OrderForm />
            </div>
            <Footer />
        </>
    )
}