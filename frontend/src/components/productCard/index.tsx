import React from 'react';
import "./productCard.css";

interface Product {
    price: number,
    discount: number,
    name: string,
    image: string,
}

interface Props {
    product: Product,
}

export const ProductCard: React.FC<Props> = ({product}) => {
    const discount: number = product.discount;
    let price: number = product.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    return (
        <a href="/product/123" className="product">
            <div className="product-card-img tea-10"></div>
            <div className="info">
                <p className="cost"><strong>{price}р</strong> / 100гр</p>
                <span className="original-cost"><p>{discount != 0 ? `${product.price}р` : ''}</p></span>
                <p className="discount">{discount != 0 ? `-${discount}%` : ""}</p>
                <span className="material-icons">shopping_cart</span>
                <p className="name">{product.name}</p>
            </div>
        </a>
    );
}