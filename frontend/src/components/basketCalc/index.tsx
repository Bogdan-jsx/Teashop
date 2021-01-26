import React from "react";
import "./basketCalc.css";

interface BasketProduct {
    price: number,
    discount: number,
    name: string,
    image: string,
    totalWeight: number,
    totalPrice: number,
}

interface Props {
    basketProducts: Array<BasketProduct>,
}

export const BasketCalc: React.FC<Props> = ({basketProducts}) => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let total = 0;

    for (let product of basketProducts) {
        let multiplier = product.totalWeight / 100;
        totalPrice += product.price * multiplier;
        totalDiscount += product.price * multiplier / 100 * product.discount;
    }
    total = totalPrice - totalDiscount;
    if (total < 1500) {
        total += 150;
    }

    return (
        <>
        <table className="order-price">
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
                <td>+150р</td>
            </tr>
            <tr className="total">
                <td>Итого</td>
                <td>{total}р</td>
            </tr>
        </table>
        <p className="free-delivery">Бесплатная доставка при покупке от 1 500р</p>
        </>
    )
}