import React from "react";
import "./productInfo.css"
import { Product } from "../../interafaces";

interface Props {
    info: Product,
}

interface BasketItem {
    id: string,
    weight: number,
}

export const ProductInfo: React.FC<Props> = ({info}) => {
    const discount: number = info.discount;
    let price: number = info.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    const toBasket = () => {
        let basketJson = localStorage.getItem("basket");
        let basket = basketJson !== null ? JSON.parse(basketJson) as Array<BasketItem> : [];
        basket.push({ id: info.id, weight: 100 });
        localStorage.setItem("basket", JSON.stringify(basket));
    }

    return (
        <div className="product-info">
            <h1 className="product-name">{info.name}</h1>
            <p className="vendor-code">Артикул <span>{info.vendorCode}</span></p>
            <div className="product-price">
                <p className="currently-price">{price}р</p>
                <p className="weight"><span>100</span>гр</p>
                <p className="original-price"><span>{discount != 0 ? `${info.price}р` : ""}</span></p>
                <p className="discount">{discount != 0 ? `-${discount}%` : ""}</p>
            </div>
            <div className="to-basket" onClick={toBasket.bind(null)} >В корзину</div>
            <table className="tea-info">
                <tbody>
                    <tr>
                        <td className="characteristic-name">Действие чая</td>
                        <td className="characteristic-value">{info.effect}</td>
                    </tr>
                    <tr>
                        <td className="characteristic-name">Внешний вид</td>
                        <td className="characteristic-value">{info.appearance}</td>
                    </tr>
                    <tr>
                        <td className="characteristic-name">Как заварить</td>
                        <td className="characteristic-value">{info.brew}</td>
                    </tr>
                    <tr>
                        <td className="characteristic-name">Тип чая</td>
                        <td className="characteristic-value">{info.type}</td>
                    </tr>
                    <tr>
                        <td className="characteristic-name">Вкус</td>
                        <td className="characteristic-value">{info.taste}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}