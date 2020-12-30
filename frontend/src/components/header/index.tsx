import React, { useState } from 'react';
import "./header.css"

interface HeaderProps {
    isCatalogOpened: boolean,
    setIsCatalogOpened(value: boolean): void,
}

export const Header: React.FC<HeaderProps> = ({isCatalogOpened, setIsCatalogOpened}) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

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
        <header>
            <div className="container">
                <div className="logo nav-item"><img src="img/logo.png" alt="Logo"/><p>Teashop.by</p></div>
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
                        <li className="nav-item"><a href="" className="shipping-and-payment">Доставка и оплата</a></li>
                        <li><input type="text" className="search nav-item" placeholder="Поиск по товарам"/></li>
                        <li className="basket nav-item">
                            <span className="material-icons">shopping_cart</span>
                            <p className="basket-products-count">15</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}