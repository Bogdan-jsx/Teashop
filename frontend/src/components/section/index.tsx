import React from "react";
import "./section.css";
import { ProductCard } from "../productCard/index";

interface Product {
    priceRub: number,
    priceUah: number,
    originalPrice: number,
    discount: number,
    name: string,
    image: string,
}

interface Section {
    name: string,
    products: Array<Product>,
}

interface Props {
    section: Section, 
}

export const Section: React.FC<Props> = ({section}) => {
    return (
        <div className="section">
            <div className="section-info">
                <h2 className="section-name">{section.name}</h2>
                <div className="products-count">85</div>
                <a href="#" className="all-products">Смотреть все товары</a><br/>
            </div>
            <div className="products">
                {section.products && section.products.map(item => {
                    return <ProductCard product={item} />
                })}
            </div>
        </div>
    )
}