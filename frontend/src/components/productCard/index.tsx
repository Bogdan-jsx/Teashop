import React from 'react';
import "./productCard.css";

export const ProductCard: React.FC = () => {
    return (
        <a href="#" className="product">
            <div className="product-card-img tea-10"></div>
            <div className="info">
                <p className="cost"><strong>260р</strong> / 100гр</p>
                <span className="original-cost"><p>320р</p></span>
                <p className="discount">-45%</p>
                <span className="material-icons">shopping_cart</span>
                <p className="name">Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p>
            </div>
        </a>
    );
}