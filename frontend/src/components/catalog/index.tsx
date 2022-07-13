import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./catalog.css"
import { Product, CatalogCategory } from "../../interafaces";
import { Categories } from '../categories/index';
import { Error } from './../error/index';
import ProductCardContainer from './../productCard/container';

interface Props {
    categories: Array<CatalogCategory>,
    isCatalogOpened: boolean,
    catalogProducts: Array<Product>,
    loadCatalogProducts: () => void,
    loadCategories: () => void,
    isProductsError: boolean,
    isCategoriesError: boolean,
}

export const Catalog: React.FC<Props> = ({ isCatalogOpened, categories, catalogProducts, loadCatalogProducts, loadCategories, isProductsError, isCategoriesError }) => {
    useEffect(() => loadCategories(), [loadCategories]);
    useEffect(() => loadCatalogProducts(), [loadCatalogProducts]);

    const [selectedItem, setSelectedItem] = useState<string>(categories[0]?.name)

    const selectMenuItem = (item: CatalogCategory) => {
        setSelectedItem(item.name);
    }

    return (
        <div id="menu-catalog" className={isCatalogOpened ? "opened" : "hidden"}>
            <div className="catalog">
                {!isCategoriesError ? 
                    <Categories categories={categories} selectedItem={selectedItem} selectMenuItem={selectMenuItem} /> :
                        <Error />
                }
            </div>
            <div className="products-in-catalog">
                {!isProductsError ?
                    catalogProducts && catalogProducts.map(item => {
                        return <ProductCardContainer key={item.id} product={item} />
                    }) :
                    <Error />
                }
            </div>
        </div>
    );
}