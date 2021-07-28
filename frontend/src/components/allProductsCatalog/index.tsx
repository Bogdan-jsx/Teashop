import React, { useEffect } from "react";
import "./allProductsCatalog.css";
import { CatalogCategory } from "../../interafaces";
import { Category } from "../category";
import { Error } from "../error/index";

interface Props {
    categories: Array<CatalogCategory>,
    loadCategories: () => void,
    selectedSubs: string[],
    setSelectedSubs: (value: string[]) => void,
    isError: boolean,
}

export const AllProductsCatalog: React.FC<Props> = ({ categories, loadCategories, setSelectedSubs, selectedSubs, isError }) => {
    useEffect(() => loadCategories(), [loadCategories]);

    const clearFilters = () => {
        setSelectedSubs([]);
        sessionStorage.setItem("subCategory", "");
    }

    return (
        <>
        <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
        <ul className="filter-catalog menu__box">
            {!isError ? categories && categories.map((item: CatalogCategory) => {
                return <Category category={item} key={item.name} selectedSubs={selectedSubs} setSelectedSubs={setSelectedSubs} />
            }) :
                <Error />
            }
            <li className="clear-filters menu__item"><button onClick={clearFilters.bind(null)}>Очистить фильтры</button></li>
        </ul>
        </>
    )
}