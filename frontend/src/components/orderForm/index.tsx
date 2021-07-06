import React, { FormEvent, useRef } from "react";
import "./orderForm.css";
import { BasketProductBasic } from './../../interafaces';

interface Props {
    sendOrder: (basket: BasketProductBasic[], name: string, phone: string, comment: string, address: string) => void,
}

export const OrderForm: React.FC<Props> = ({ sendOrder }) => {
    const name = useRef<HTMLInputElement>(null);
    const phoneNumber = useRef<HTMLInputElement>(null);
    const comment = useRef<HTMLInputElement>(null);
    const address = useRef<HTMLInputElement>(null);

    const submitOrder = (e: FormEvent) => {
        e.preventDefault();
        const basketJson = localStorage.getItem("basket");
        const basket = basketJson ? JSON.parse(basketJson) : [];
        const nameValue = name.current?.value as string;
        const phoneValue = phoneNumber.current?.value as string;
        const commentValue = comment.current ? comment.current.value : "";
        const addressValue = address.current?.value as string;

        sendOrder(basket, nameValue, phoneValue, commentValue, addressValue);

        localStorage.setItem("basket", "[]");
    }

    return (
        <div className="order-form">
            <h2>Оформление заказа</h2>
            <form action="" method="post" onSubmit={submitOrder}>
                <table>
                    <tr>
                        <td>Имя</td>
                        <td><input type="text" placeholder="Никита" required ref={name} /></td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td><input type="tel" placeholder="375 29 126 41 90" required ref={phoneNumber} /></td>
                    </tr>
                    <tr>
                        <td>Комментарий</td>
                        <td><input type="text" placeholder="Просьба доставить с 8 до 12" ref={comment} /></td>
                    </tr>
                    <tr>
                        <td>Адрес доставки</td>
                        <td><input type="text" placeholder="Минск, Аэродромная, 36" required ref={address} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Оформить" className="order-submit-button" /></td>
                    </tr>
                </table>
            </form>
            
        </div>
    )
}