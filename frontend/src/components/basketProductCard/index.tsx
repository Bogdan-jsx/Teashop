import React, { useRef } from "react";
import "./basketProductCard.css";

interface BasketProduct {
    _id: number,
    price: number,
    discount: number,
    name: string,
    image: string,
    totalWeight: number,
    totalPrice: Number,
}

interface Props {
    product: BasketProduct,
    editWeight: Function,
}

export const BasketProductCard: React.FC<Props> = ({product, editWeight}) => {    
    const discount: number = product.discount;
    let price: number = product.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    const weightInput = useRef<HTMLInputElement>(null);

    function onWeightChange(e: React.KeyboardEvent) {
        console.log(123);
        if (e.code === "Enter") {
            console.log(123);
            if (weightInput.current === null) return;
            
            const newWeight = weightInput.current.value;
            console.log(newWeight);
            editWeight(newWeight);
        }
    }  

    return (
        <div className="basket-product-card">
            <div className="image" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/img" + product.image})`}}></div>
            <div className="basket-product-info">
                <div className="product-price">
                    <p className="currently-price">{price}р  /</p>
                    <p className="weight"><span>100</span>гр</p>
                    <p className="original-price"><span>{discount != 0 ? `${product.price}р` : ""}</span></p>
                    <p className="discount">{discount != 0 ? `-${discount}%` : ""}</p>
                </div>
                <p className="product-name">{product.name}</p>
            </div>
            
            <p className="total-weight"><input defaultValue={product.totalWeight} onKeyPress={onWeightChange} ref={weightInput} type="number" max="1000" />гр</p>
            <p className="total-price">{product.totalPrice}р</p>
            <span className="material-icons delete-item">clear</span>
        </div>
    )
}