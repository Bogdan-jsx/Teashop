import React, { useState } from 'react';
import "./catalog.css"
import { ProductCard } from "../productCard/index";

interface Product {
    price: number,
    discount: number,
    name: string,
    image: string,
}

interface CatalogProps {
    isCatalogOpened: boolean,
}

interface Subcategory {
    name: string,
    link: string,
}

interface CatalogCategory {
    name: string,
    subcategories: Array<Subcategory>,
}

export const Catalog: React.FC<CatalogProps> = ({isCatalogOpened}) => {
    const productsInCatalog: Array<Product> = [
        {
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "./tea-1",
        },
        {
            price: 360,
            discount: 45,
            name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
            image: "./tea-1",
        },
    ]

    const categories: Array<CatalogCategory> = [
        {
            name: "Пуэр",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                },
                {
                    name: "Тайваньский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Улун",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Хэй ча (черный чай)",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Красный чай",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Зеленый чай",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
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
                        return <li className={selectedItem === item.name ? "main-list-item selected-item" : "main-list-item"} onClick={selectMenuItem.bind(null, item)}>{item.name}</li>
                    })}
                </ul>
                <ul className="secondary-list">
                    {categories && categories.filter((item: CatalogCategory) => item.name === selectedItem)[0].subcategories.map(item => {
                        return <li className="secondary-list-item"><a href={item.link}>{item.name}</a></li>
                    })}
                    <li className="secondary-list-item"><a href="#">Уишаньский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Гуандунский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Тайваньский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Габа</a></li>
                    <li className="secondary-list-item"><a href="#">Тайский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Все сорта</a></li>
                </ul>
            </div>
            <div className="products-in-catalog">
                {productsInCatalog && productsInCatalog.map(item => {
                    return <ProductCard product={item} />
                })}
            </div>
        </div>
    );
}