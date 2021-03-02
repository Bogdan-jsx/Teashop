import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./catalog.css"
import { ProductCard } from "../productCard/index";

interface Product {
    price: number,
    discount: number,
    name: string,
    image: string,
    _id: number,
}

interface CatalogProps {
    isCatalogOpened: boolean,
}

interface Subcategory {
    name: string,
    link: string,
    _id: number,
}

interface CatalogCategory {
    name: string,
    subcategories: Array<Subcategory>,
    _id: number,
}

export const Catalog: React.FC<CatalogProps> = ({isCatalogOpened}) => {
    const productsInCatalog: Array<Product> = [
        {
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "./tea-1",
            _id: 1,
        },
        {
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "./tea-1",
            _id: 2,
        },
    ]

    const categories: Array<CatalogCategory> = [
        {
            name: "Пуэр",
            _id: 1,
            subcategories: [
                {
                    name: "Уишаньский улун",
                    _id: 2,
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    _id: 3,
                    link: "#",
                },
                {
                    name: "Тайваньский улун",
                    _id: 4,
                    link: "#",
                }
            ],
        },
        {
            name: "Улун",
            _id: 5,
            subcategories: [
                {
                    name: "Уишаньский улун",
                    _id: 6,
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    _id: 7,
                    link: "#",
                }
            ],
        },
        {
            name: "Хэй ча (черный чай)",
            _id: 8,
            subcategories: [
                {
                    name: "Уишаньский улун",
                    _id: 9,
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    _id: 10,
                    link: "#",
                }
            ],
        },
        {
            name: "Красный чай",
            _id: 11,
            subcategories: [
                {
                    name: "Уишаньский улун",
                    _id: 12,
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    _id: 13,
                    link: "#",
                }
            ],
        },
        {
            name: "Зеленый чай",
            _id: 14,
            subcategories: [
                {
                    name: "Уишаньский улун",
                    _id: 15,
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    _id: 16,
                    link: "#",
                }
            ],
        },
    ]

    const [selectedItem, setSelectedItem] = useState<string>(categories[0].name)

    const selectMenuItem = (item: CatalogCategory) => {
        setSelectedItem(item.name);
    }

    return (
        <div id="menu-catalog" className={isCatalogOpened ? "" : "hidden"}>
            <div className="catalog">
                <ul className="main-list">
                    {categories && categories.map((item: CatalogCategory) => {
                        return <li key={item._id} className={selectedItem === item.name ? "main-list-item selected-item" : "main-list-item"} onClick={selectMenuItem.bind(null, item)}>{item.name}</li>
                    })}
                </ul>
                <ul className="secondary-list">
                    {categories && categories.filter((item: CatalogCategory) => item.name === selectedItem)[0].subcategories.map(item => {
                        return <li key={item._id} className="secondary-list-item"><Link to={item.link}>{item.name}</Link></li>
                    })}
                </ul>
            </div>
            <div className="products-in-catalog">
                {productsInCatalog && productsInCatalog.map(item => {
                    return <ProductCard key={item._id} product={item} />
                })}
            </div>
        </div>
    );
}