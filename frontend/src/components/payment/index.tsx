import React from "react";
import "./style.css";

export const Payment: React.FC = () => {
    return (
        <div className="payment">
            <h2>Оплата</h2>
            <div className="payment-blocks">
                <div className="block">
                    <img src={process.env.PUBLIC_URL + "/img/payment-1.png"} />
                    <div>
                        <h3>Наличными</h3>
                        <p>Оплата наличными возможна при доставке заказа курьером, либо при самовывозе. При оплате наличными предоставляется кассовый чек</p>
                    </div> 
                </div>
                <div className="block">
                    <img src={process.env.PUBLIC_URL + "/img/payment-2.png"} />
                    <div>
                        <h3>Наложенным платежом</h3>
                        <p>Оплата наложенным платежом при доставке заказа почтой. Оплата будет производится в отделении БелПочты при получении посылки</p>
                    </div>
                </div>
                <div className="block">
                    <img src={process.env.PUBLIC_URL + "/img/payment-3.png"} />
                    <div>
                        <h3>Банковской картой</h3>
                        <p>Платежи по банковским картам осуществляются через систему электронных платежей bePaid</p>
                    </div>
                </div>
            </div>
        </div>
    )
}