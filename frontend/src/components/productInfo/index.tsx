import React from "react";
import "./productInfo.css"

interface FullProductInfo {
    title: String,
    vendorCode: String,
    price: number,
    discount: number,
    effect: String,
    appearance: String,
    howToBrew: String,
    type: String,
    taste: String
    images: Array<String>,
}

interface Props {
    info: FullProductInfo,
}

export const ProductInfo: React.FC<Props> = ({info}) => {
    const discount: number = info.discount;
    let price: number = info.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    return (
        <div className="product-info">
            <h1 className="product-name">{info.title}</h1>
            <p className="vendor-code">Артикул <span>{info.vendorCode}</span></p>
            <div className="product-price">
                <p className="currently-price">{price}р</p>
                <p className="weight"><span>100</span>гр</p>
                <p className="original-price"><span>{discount != 0 ? `${info.price}р` : ""}</span></p>
                <p className="discount">{discount != 0 ? `-${discount}%` : ""}</p>
            </div>
            <div className="to-basket">В корзину</div>
            <table className="tea-info">
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
                    <td className="characteristic-value">{info.howToBrew}</td>
                </tr>
                <tr>
                    <td className="characteristic-name">Тип чая</td>
                    <td className="characteristic-value">{info.type}</td>
                </tr>
                <tr>
                    <td className="characteristic-name">Вкус</td>
                    <td className="characteristic-value">{info.taste}</td>
                </tr>
            </table>
        </div>
    )
}