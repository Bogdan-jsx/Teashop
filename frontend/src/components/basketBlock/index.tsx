import React from "react";
import "./basketBlock.css";
import { BasketProductCard } from "../basketProductCard/index";

interface BasketProduct {
    _id :number,
    price: number,
    discount: number,
    name: string,
    image: string,
    totalWeight: number,
    totalPrice: Number,
}

interface Props {
    basketProducts: Array<BasketProduct>,
    editWeight: Function,
}

export const BasketBlock: React.FC<Props> = ({basketProducts, editWeight}) => {
    return (
        <div className="basket-block">
            <h1>Корзина<span className="basket-products-count">{basketProducts.length}</span></h1>
            {basketProducts && basketProducts.map((item: BasketProduct) => {
                return <BasketProductCard product={item} key={item._id} editWeight={editWeight(item._id)} />
            })}
        </div>
    )
}