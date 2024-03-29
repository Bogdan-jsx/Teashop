import React, { useState } from "react";
import "./productInfo.css"
import { Product, BasketProductBasic } from "../../interafaces";
import { ModalProductToBasket } from './../modalProductToBasket/index';

interface Props {
    info: Product,
    increaseBasketCount: () => void,
}

export const ProductInfo: React.FC<Props> = ({info, increaseBasketCount}) => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isSuccessful, setIsSuccessful] = useState<boolean>(true);

    const discount: number = info.discount;
    let price: number = info.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    const toBasket = () => {
        let basketJson = localStorage.getItem("basket");
        let basket = basketJson !== null ? JSON.parse(basketJson) as Array<BasketProductBasic> : [];
        if (basket.findIndex(item => item.id == info.id) === -1) {
            basket.push({ id: info.id, weight: 100 });
            localStorage.setItem("basket", JSON.stringify(basket));
            setIsSuccessful(true);
            setIsModal(true);
            increaseBasketCount();
        } else {
            setIsSuccessful(false);
            setIsModal(true);
        }
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
            {isModal ? <ModalProductToBasket setIsModal={setIsModal} isSuccessful={isSuccessful} /> : "" }
        </div>
    )
}