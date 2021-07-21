import React from "react";
import "./basketCalc.css";
import { Product } from './../../interafaces';

interface Props {
    basketProducts: Array<Product>,
}

export const BasketCalc: React.FC<Props> = ({basketProducts}) => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let total = 0;

    for (let product of basketProducts) {
        let multiplier = product.weight / 100;
        totalPrice += product.price * multiplier;
        totalDiscount += product.price * multiplier / 100 * product.discount;
    }
    total = totalPrice - totalDiscount;
    let isFreeDelivery: boolean = false;
    if (total < 1500) {
        isFreeDelivery = false;
        total += 150;
    } else {
        isFreeDelivery = true;
    }
    return (
        <>
        <table className="order-price">
            <tbody>
                <tr>
                    <td>Общая сумма</td>
                    <td>{totalPrice}р</td>
                </tr>
                <tr>
                    <td>Общая скидка</td>
                    <td>-{totalDiscount}р</td>
                </tr>
                <tr>
                    <td>Доставка</td>
                    <td>{!isFreeDelivery ? "+150р" : "+0р"}</td>
                </tr>
                <tr className="total">
                    <td>Итого</td>
                    <td>{total}р</td>
                </tr>
            </tbody>
        </table>
        <p className="free-delivery">Бесплатная доставка при покупке от 1 500р</p>
        </>
    )
}