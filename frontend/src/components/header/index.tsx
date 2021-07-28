import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Logo } from "../logo/index";
import "./header.css";
import { SearchInput } from './../searchInput/index';

interface HeaderProps {
    isCatalogOpened: boolean,
    setIsCatalogOpened(value: boolean): void,
}

export const Header: React.FC<HeaderProps> = ({isCatalogOpened, setIsCatalogOpened}) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [basketProductsCount, setBasketProductsCount] = useState<number>(0);

    useEffect(() => {
        const basketJson = localStorage.getItem("basket");
        let basket = [];
        if (basketJson !== null) {
            basket = JSON.parse(basketJson);
        }
        setBasketProductsCount(basket.length);
    }, [setBasketProductsCount]);

    function toggleCollapsedMenu(): void {
        if (isMenuOpened) {
            setIsMenuOpened(false);
        } else {
            setIsMenuOpened(true);
        }
    }

    function toggleCatalog(): void {
        if (isCatalogOpened) {
            setIsCatalogOpened(false);
        } else {
            setIsCatalogOpened(true);
        }
    }

    return (
        <header className={isMenuOpened ? "opened-header" : ""}>
            <div className="container">
                <Logo />
                <div className="collapsed-menu-btn" onClick={toggleCollapsedMenu.bind(null)}><span className="material-icons">menu</span></div>
                <nav>
                    <ul id="nav-menu-list" className={isMenuOpened ? "opened" : ""}>
                        <li className={isCatalogOpened ? "menu nav-item menu-opened" : "menu nav-item"} onClick={toggleCatalog.bind(null)}>
                            <div className="menu-btn">
                                <div className="menu-item first"></div>
                                <div className="menu-item second"></div>
                                <div className="menu-item third"></div>
                            </div>
                            <p>Чайный каталог</p>
                        </li>
                        <li className="phone-number nav-item">375 33 604 11 77</li>
                        <li className="working-time nav-item">с 10 до 21</li>
                        <li className="nav-item"><Link to="/shipping-payment" className="shipping-and-payment">Доставка и оплата</Link></li>
                        <SearchInput /> 
                        <li className="basket nav-item">
                            <Link to="/basket">
                                <span className="material-icons">shopping_cart</span>
                                <p className="basket-products-count">{basketProductsCount}</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}