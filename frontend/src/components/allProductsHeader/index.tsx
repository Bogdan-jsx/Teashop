import React from "react";
import "./allProductsHeader.css";
import { SortBy } from "../sortBy/index";

export const AllProductsHeader: React.FC = () => {
    return (
        <div className="all-products-header">
            <div>
                <h2>Все товары</h2>
                <p>85</p>
            </div>
            <SortBy />
        </div>
    )
}