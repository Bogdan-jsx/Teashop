import React from "react";
import "./allProductsHeader.css";
import { SortBy } from "../sortBy/index";

type SortType = "cheap" | "expensive" | "popular";

interface Props {
    productsCount: number,
    setSort: (value: SortType) => void,
}

export const AllProductsHeader: React.FC<Props> = ({ setSort, productsCount }) => {
    return (
        <div className="all-products-header">
            <div>
                <h2>Все товары</h2>
                <p>{productsCount}</p>
            </div>
            <SortBy setSort={setSort} />
        </div>
    )
}