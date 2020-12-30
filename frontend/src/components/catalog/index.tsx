import React from 'react';
import "./catalog.css"
import ProductCard from "../productCard";

interface CatalogProps {
    isCatalogOpened: boolean,
}

export const Catalog: React.FC<CatalogProps> = ({isCatalogOpened}) => {
    return (
        <div id="menu-catalog" className={isCatalogOpened ? "" : "hidden"}>
            <div className="catalog">
                <ul className="main-list">
                    <li className="main-list-item">Пуэр</li>
                    <li className="main-list-item selected-item">Улун</li>
                    <li className="main-list-item">Хэй ча (черный чай)</li>
                    <li className="main-list-item">Красный чай</li>
                    <li className="main-list-item">Зеленый чай</li>
                    <li className="main-list-item">Белый чай</li>
                    <li className="main-list-item">Желтый чай</li>
                    <li className="main-list-item">Связанный чай</li>
                    <li className="main-list-item">Японский чай</li>
                    <li className="main-list-item">Матча</li>
                    <li className="main-list-item">Тайский чай</li>
                    <li className="main-list-item">Индийский чай</li>
                    <li className="main-list-item">Цейлонский чай</li>
                </ul>
                <ul className="secondary-list">
                    <li className="secondary-list-item"><a href="#">Уишаньский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Гуандунский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Тайваньский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Габа</a></li>
                    <li className="secondary-list-item"><a href="#">Тайский улун</a></li>
                    <li className="secondary-list-item"><a href="#">Все сорта</a></li>
                </ul>
            </div>
            <div className="products-in-catalog">
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}