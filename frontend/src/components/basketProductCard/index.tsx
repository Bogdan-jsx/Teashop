import React, { useRef } from "react";
import "./basketProductCard.css";
import { Product } from './../../interafaces';

interface Props {
    product: Product,
}

export const BasketProductCard: React.FC<Props> = ({product}) => {    
    const discount: number = product.discount;
    let price: number = product.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    const totalPrice = product.weight / 100 * price;

    const weightInput = useRef<HTMLInputElement>(null);

    function onWeightChange(e: React.KeyboardEvent) {
        if (e.code === "Enter") {
            if (weightInput.current === null) return;
            
            const newWeight = weightInput.current.value;
            console.log(newWeight);
            // editWeight(newWeight);
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
            
            <p className="total-weight"><input defaultValue={product.weight} onKeyPress={onWeightChange} ref={weightInput} type="number" max="1000" />гр</p>
            <p className="total-price">{totalPrice}р</p>
            <span className="material-icons delete-item">clear</span>
        </div>
    )
}