import React from "react";
import "./footer.css";

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="address">проспект Независимости, 28<br/>Минск, <span className="metro">метро Октябрьская</span></div>
                <div className="contacts">
                    <p>375 33 604 11 77</p>
                    <p>teashop@teashop.by</p>
                    <p>teaspace@teashop.by</p>
                </div>
                <div className="descr"><p>Интернет-магазин зарегистрирован в Торговом реестре РБ 22/10/2015 г. ИП Клишевский Вадим Станиславович г. Минск, ул. Голубева, 22, корп.1, кв.200. Св-во о регистрации №192236137 выдано 14.03.2014 г.</p></div>
                <div className="social">
                    <a href="#"><span className="material-icons">face</span></a>
                    <a href="#"><span className="material-icons">face</span></a>
                    <a href="#"><span className="material-icons">face</span></a>
                </div>
            </div>
        </footer>
    )
}