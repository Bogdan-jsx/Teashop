import React, { useEffect } from "react";
import "./basketBlock.css";
import { BasketProductCard } from "../basketProductCard/index";
import { BasketProductBasic, Product } from './../../interafaces';

interface Props {
    loadBasketProducts: (productsBasic: BasketProductBasic[]) => void,
    basketProducts: Product[],
}

export const BasketBlock: React.FC<Props> = ({ loadBasketProducts, basketProducts }) => {
    const basketProductsJson = localStorage.getItem("basket");
    const basketProductsBasic = basketProductsJson !== null ? JSON.parse(basketProductsJson) : [];

    useEffect(() => loadBasketProducts(basketProductsBasic), [loadBasketProducts]);

    return (
        <div className="basket-block">
            <h1>Корзина<span className="basket-products-count">{basketProducts.length}</span></h1>
            {basketProducts && basketProducts.map((item: Product) => {
                return <BasketProductCard product={item} key={item.id} />
            })}
        </div>
    )
}