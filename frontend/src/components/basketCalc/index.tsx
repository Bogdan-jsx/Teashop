import React, { useEffect, useState } from "react";
import "./basketCalc.css";
import { Product } from './../../interafaces';

interface Props {
    basketProducts: Array<Product>,
}

export const BasketCalc: React.FC<Props> = ({basketProducts}) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalDiscount, setTotalDiscount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [isFreeDelivery, setIsFreeDelivery] = useState<boolean>(false);

    useEffect(() => {
        let tempTotalPrice = 0;
        let tempTotalDiscount = 0;
        for (let product of basketProducts) {
            let multiplier = product.weight / 100;
            tempTotalPrice += product.price * multiplier;
            
            tempTotalDiscount += product.price * multiplier / 100 * product.discount;
            setTotalDiscount(totalDiscount + (product.price * multiplier / 100 * product.discount));
        }
        setTotalPrice(tempTotalPrice);
        setTotalDiscount(tempTotalDiscount);
        let tempTotal = tempTotalPrice - tempTotalDiscount;
        if (tempTotal < 1500) {
            setIsFreeDelivery(false);
            tempTotal += 150;
        } else {
            setIsFreeDelivery(true);
        }
        setTotal(tempTotal);
    }, [basketProducts, setTotalPrice, setTotalDiscount, setTotal, setIsFreeDelivery]);

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