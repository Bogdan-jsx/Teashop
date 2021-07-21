import React from "react";
import "./style.css";

interface Props {
    setIsModal: (value: boolean) => void,
}

export const ModalOrderSubmited: React.FC<Props> = ({ setIsModal }) => {
    return (
        <div id="modal-order-submited">
            <div>
                <p>Заказ оформлен.<br/>Мы свяжемся с вами в течении 24 часов для его подтвержения.</p>
                <button onClick={setIsModal.bind(null, false)}>Ок</button>
            </div>
        </div>
    )
}