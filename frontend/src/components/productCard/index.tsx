import React from 'react';
import "./productCard.css";

interface ProductCard {
    priceRub: number,
    priceUah: number,
    originalPrice: number,
    discount: number,
    name: string,
    image: string,
}

interface Props {
    product: ProductCard,
}

export const ProductCard: React.FC<Props> = ({product}) => {
    return (
        <a href="#" className="product">
            <div className="product-card-img tea-10"></div>
            <div className="info">
                <p className="cost"><strong>{product.priceRub}р</strong> / {product.priceUah}гр</p>
                <span className="original-cost"><p>{product.originalPrice}р</p></span>
                <p className="discount">-{product.discount}%</p>
                <span className="material-icons">shopping_cart</span>
                <p className="name">{product.name}</p>
            </div>
        </a>
    );
}