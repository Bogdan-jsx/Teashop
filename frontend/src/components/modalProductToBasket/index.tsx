import React from "react";
import "./style.css";

interface Props {
    setIsModal: (value: boolean) => void,
    isSuccessful: boolean,
}

export const ModalProductToBasket: React.FC<Props> = ({ setIsModal, isSuccessful }) => {
    return (
        <div id="modal-product-to-basket">
            <div>
                <p>{isSuccessful ? "Товар добавлен в корзину" : "Этот товар уже есть у вас в корзине"}</p>
                <button onClick={setIsModal.bind(null, false)}>Ок</button>
            </div>
        </div>
    )
}