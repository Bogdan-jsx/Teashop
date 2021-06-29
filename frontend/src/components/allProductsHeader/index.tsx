import React from "react";
import "./allProductsHeader.css";
import { SortBy } from "../sortBy/index";

type SortType = "cheap" | "expensive" | "popular";

interface Props {
    setSort: (value: SortType) => void,
}

export const AllProductsHeader: React.FC<Props> = ({ setSort }) => {
    return (
        <div className="all-products-header">
            <div>
                <h2>Все товары</h2>
                <p>85</p>
            </div>
            <SortBy setSort={setSort} />
        </div>
    )
}