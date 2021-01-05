import React from "react";
import "./section.css";
import { ProductCard } from "../productCard/index";

interface SectionProps {
    sectionName: string,
}

export const Section: React.FC<SectionProps> = ({sectionName}) => {
    return (
        <div className="section">
            <div className="section-info">
                <h2 className="section-name">{sectionName}</h2>
                <div className="products-count">85</div>
                <a href="#" className="all-products">Смотреть все товары</a><br/>
            </div>
            <div className="products">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}