import React, { useEffect, useState } from "react";
import "./basketBlock.css";
import { BasketProductCard } from "../basketProductCard/index";
import { BasketProductBasic, Product } from './../../interafaces';

interface Props {
    loadBasketProducts: (productsBasic: BasketProductBasic[]) => void,
    basketProducts: Product[],
}

export const BasketBlock: React.FC<Props> = ({ loadBasketProducts, basketProducts }) => {
    let json = localStorage.getItem("basket");
    const [basketProductsJson, setBasketProductsJson] = useState<string>(json ? json : "[]");

    useEffect(() => {
        const basketProductsBasic = basketProductsJson !== null ? JSON.parse(basketProductsJson) : [];
        if (basketProductsBasic !== []) {
            loadBasketProducts(basketProductsBasic);
        }
    }, [loadBasketProducts, basketProductsJson]);

    const deleteItem = (id: string) => {
        const basketJson = localStorage.getItem("basket");
        let basket = basketJson !== null ? JSON.parse(basketJson) : [];
        const index = basket.findIndex((item: BasketProductBasic) => item.id == id)
        basket.splice(index, 1);
        localStorage.setItem("basket", JSON.stringify(basket));
        json = localStorage.getItem("basket")
        setBasketProductsJson(json ? json : "[]");
    }

    return (
        <div className="basket-block">
            <h1>Корзина<span className="basket-products-count">{basketProducts.length}</span></h1>
            {basketProducts && basketProducts.map((item: Product) => {
                return <BasketProductCard product={item} key={item.id} deleteItem={deleteItem} setBasketJson={setBasketProductsJson} />
            })}
        </div>
    )
}