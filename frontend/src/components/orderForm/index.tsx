import React from "react";
import "./orderForm.css";

export const OrderForm: React.FC = () => {
    return (
        <div className="order-form">
            <h2>Оформление заказа</h2>
            <table>
                <tr>
                    <td>Имя</td>
                    <td><input type="text" placeholder="Никита" /></td>
                </tr>
                <tr>
                    <td>Телефон</td>
                    <td><input type="tel" placeholder="375 29 126 41 90" /></td>
                </tr>
                <tr>
                    <td>Комментарий</td>
                    <td><input type="text" placeholder="Просьба доставить с 8 до 12" /></td>
                </tr>
                <tr>
                    <td>Адрес доставки</td>
                    <td><input type="text" placeholder="Минск, Аэродромная, 36" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="button" value="Оформить" className="order-submit-button" /></td>
                </tr>
            </table>
        </div>
    )
}