import React from "react";
import { Link } from "react-router-dom";
import { CatalogCategory } from './../../interafaces';

interface Props {
    categories: CatalogCategory[],
    selectedItem: string,
    selectMenuItem: (item: CatalogCategory) => void,
}

export const Categories: React.FC<Props> = ({ categories, selectedItem, selectMenuItem }) => {
    const selectSub = (id: string) => {
        sessionStorage.setItem("subCategory", id);
    }

    return (
        <>
        <ul className="main-list">
            {categories && categories.map((item: CatalogCategory) => {
                return <li key={item.id} className={selectedItem === item.name ? "main-list-item selected-item" : "main-list-item"} onClick={selectMenuItem.bind(null, item)}>{item.name}</li>
            })}
        </ul>
        <ul className="secondary-list">
            {categories && categories.filter((item: CatalogCategory) => item.name === selectedItem)[0]?.subCategories.map(item => {
                return <li key={item.id} className="secondary-list-item" onClick={selectSub.bind(null, item.id)}><Link to="/catalog" >{item.name}</Link></li>
            })}
        </ul>
        </>
    )
}