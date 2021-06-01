import React from "react";
import "./section.css";
import { ProductCard } from "../productCard/index";
import { SectionAttr } from "../../interafaces";

interface Props {
    section: SectionAttr, 
}

export const Section: React.FC<Props> = ({section}) => {
    return (
        <div className="section">
            <div className="section-info">
                <h2 className="section-name">{section.name}</h2>
                <div className="products-count">{section.count}</div>
                <a href="#" className="all-products">Смотреть все товары</a><br/>
            </div>
            <div className="products">
                {section.products && section.products.map(item => {
                    return <ProductCard product={item} key={item.id} />
                })}
            </div>
        </div>
    )
}