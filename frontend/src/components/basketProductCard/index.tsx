import React, { useRef, useState } from "react";
import "./basketProductCard.css";
import { Product, BasketProductBasic } from './../../interafaces';

interface Props {
    product: Product,
    deleteItem: (id: string) => void,
    setBasketJson: (value: string) => void,
}

export const BasketProductCard: React.FC<Props> = ({product, deleteItem, setBasketJson}) => {
    const discount: number = product.discount;
    let price: number = product.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    const [totalPrice, setTotalPrice] = useState<number>(product.weight / 100 * price);

    const weightInput = useRef<HTMLInputElement>(null);

    function onWeightChange(e: React.KeyboardEvent) {
        if (e.code === "Enter") {
            if (weightInput.current === null) return;
            
            weightInput.current.blur();
            const newWeight = Number(weightInput.current.value);
            const basketJson = localStorage.getItem("basket");
            let basket = basketJson !== null ? JSON.parse(basketJson) : [];
            basket = basket.map((item: BasketProductBasic) => {
                if (item.id === product.id) {
                    item.weight = newWeight;
                }
                return item;
            })
            localStorage.setItem("basket", JSON.stringify(basket));
            product.weight = newWeight;
            setTotalPrice(product.weight / 100 * price);
            setBasketJson(JSON.stringify(basket));
        }
    }  

    return (
        <div className="basket-product-card">
            <div className="image" style={{backgroundImage: `url(${"http://localhost:3000/image/" + product.images[0]})`}}></div>
            <div className="basket-product-info">
                <div className="product-price">
                    <p className="currently-price">{price}р  /</p>
                    <p className="weight"><span>100</span>гр</p>
                    <p className="original-price"><span>{discount != 0 ? `${product.price}р` : ""}</span></p>
                    <p className="discount">{discount != 0 ? `-${discount}%` : ""}</p>
                </div>
                <p className="product-name">{product.name}</p>
            </div>
            
            <p className="total-weight"><input defaultValue={product.weight} onKeyPress={onWeightChange} ref={weightInput} type="number" max="1000" min="100" />гр</p>
            <p className="total-price">{totalPrice}р</p>
            <span className="material-icons delete-item" onClick={deleteItem.bind(null, product.id)} >clear</span>
        </div>
    )
}