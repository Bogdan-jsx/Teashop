import React from "react";
import "./basketBlock.css";
import { BasketProductCard } from "../basketProductCard/index";

interface BasketProduct {
    price: number,
    discount: number,
    name: string,
    image: string,
    totalWeight: number,
    totalPrice: Number,
}

interface Props {
    basketProducts: Array<BasketProduct>,
}

export const BasketBlock: React.FC<Props> = ({basketProducts}) => {
    return (
        <div className="basket-block">
            <h1>Корзина<span className="basket-products-count">2</span></h1>
            {basketProducts && basketProducts.map((item: BasketProduct) => {
                return <BasketProductCard product={item} />
            })}
        </div>
    )
}