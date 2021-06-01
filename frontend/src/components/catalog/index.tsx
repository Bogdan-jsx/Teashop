import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./catalog.css"
import { ProductCard } from "../productCard/index";
import { Product, CatalogCategory } from "../../interafaces";

interface Props {
    categories: Array<CatalogCategory>,
    isCatalogOpened: boolean,
    catalogProducts: Array<Product>,
    loadCatalogProducts: () => void,
}

export const Catalog: React.FC<Props> = ({isCatalogOpened, categories, catalogProducts, loadCatalogProducts}) => {
    useEffect(() => loadCatalogProducts(), [loadCatalogProducts]);

    const [selectedItem, setSelectedItem] = useState<string>(categories[0]?.name)

    const selectMenuItem = (item: CatalogCategory) => {
        setSelectedItem(item.name);
    }

    return (
        <div id="menu-catalog" className={isCatalogOpened ? "" : "hidden"}>
            <div className="catalog">
                <ul className="main-list">
                    {categories && categories.map((item: CatalogCategory) => {
                        return <li key={item.id} className={selectedItem === item.name ? "main-list-item selected-item" : "main-list-item"} onClick={selectMenuItem.bind(null, item)}>{item.name}</li>
                    })}
                </ul>
                <ul className="secondary-list">
                    {categories && categories.filter((item: CatalogCategory) => item.name === selectedItem)[0]?.subCategories.map(item => {
                        return <li key={item.id} className="secondary-list-item"><Link to="#">{item.name}</Link></li>
                    })}
                </ul>
            </div>
            <div className="products-in-catalog">
                {catalogProducts && catalogProducts.map(item => {
                    return <ProductCard key={item.id} product={item} />
                })}
            </div>
        </div>
    );
}