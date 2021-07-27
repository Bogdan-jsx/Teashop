import React from "react";
import "./style.css";

export const Shipping: React.FC = () => {
    return (
        <div className="shipping">
            <h2>Доставка</h2>
            <div className="shipping-blocks">
                <div className="block">
                    <img src={process.env.PUBLIC_URL + "/img/shipping-1.png"} />
                    <h3>Оформление заказа</h3>
                    <p>Вы можете оформить заказ в нашем интернет-магазине круглосуточно. Обработка оформленных заказов осуществляется ежедневно. Прием заказов по телефону осуществляется ежедневно с 10.00 до 21.00</p>
                </div>
                <div className="block">
                    <img src={process.env.PUBLIC_URL + "/img/shipping-2.png"} />
                    <h3>Доставка</h3>
                    <p>Доставка заказов курьером по г. Минску осуществляется ежедневно. Отправления почты: с понедельника по пятницу включительно. 
Заказы, поступившие до 15:00 обрабатываются и доставляются</p>
                </div>
                <div className="block">
                    <img src={process.env.PUBLIC_URL + "/img/shipping-3.png"} />
                    <h3>Бесплатная доставка</h3>
                    <p>Бесплатная доставка доступна при заказе на сумму более 60 рублей. Доставка возможна курьером по Минску и почтой по РБ. Мы берем на себя все расходы на упаковку и оплату отправления</p>
                </div>
                <div className="block">
                    <img src={process.env.PUBLIC_URL + "/img/shipping-4.png"} />
                    <h3>Самовывоз</h3>
                    <p>Вы можете сами забрать Ваш заказ в нашем магазине по адресу пр-т Независимости, 28 (Магазин чая TeaShop). Заказ можно забрать в течение 7 дней после его оформления на странице корзины сайты</p>
                </div>
            </div>
        </div>
    )
}