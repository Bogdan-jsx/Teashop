import React, { useState, useEffect } from "react";
import "./allProductsCatalog.css";
import { SubCategories } from "../subCategories/index";
import { Subcategory, CatalogCategory } from "../../interafaces";
import { Category } from "../category";

interface Props {
    categories: Array<CatalogCategory>,
    loadCategories: () => void,
    selectedSubs: string[],
    setSelectedSubs: (value: string[]) => void,
}

export const AllProductsCatalog: React.FC<Props> = ({ categories, loadCategories, setSelectedSubs, selectedSubs }) => {
    useEffect(() => loadCategories(), [loadCategories]);

    const clearFilters = () => {
        setSelectedSubs([]);
    }

    return (
        <ul className="filter-catalog">
            {categories && categories.map((item: CatalogCategory) => {
                return <Category category={item} key={item.name} selectedSubs={selectedSubs} setSelectedSubs={setSelectedSubs} />
            })}
            <li className="clear-filters"><button onClick={clearFilters.bind(null)}>Очистить фильтры</button></li>
        </ul>
    )
}