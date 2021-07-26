import React from "react";
import "./section.css";
import { ProductCard } from "../productCard/index";
import { SectionAttr } from "../../interafaces";
import { Link } from 'react-router-dom';

interface Props {
    section: SectionAttr, 
}

export const Section: React.FC<Props> = ({section}) => {
    const seeAll = () => {
        sessionStorage.setItem("subCategory", section.id);
    }

    return (
        <div className="section">
            <div className="section-info">
                <h2 className="section-name">{section.name}</h2>
                <div className="products-count">{section.count}</div>
                <Link to="/catalog" className="all-products" onClick={seeAll.bind(null)} >Смотреть все товары</Link><br/>
            </div>
            <div className="products">
                {section.products && section.products.map(item => {
                    return <ProductCard product={item} key={item.id} />
                })}
            </div>
        </div>
    )
}