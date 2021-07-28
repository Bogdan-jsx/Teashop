import React, { useState } from "react";
import "./basketPage.css";
import { FullHeader } from "../../components/fullHeader/index";
import { Footer } from "../../components/footer/index";
import BasketBlockContainer from './../../components/basketBlock/container';
import BasketCalcContainer from './../../components/basketCalc/container';
import OrderFormContainer from './../../components/orderForm/container';
import { ModalOrderSubmited } from './../../components/modalOrderSubmited/index';

interface Props {
    isBasketEmpty: boolean,
}

export const BasketPage: React.FC<Props> = ({ isBasketEmpty }) => {
    const [isModal, setIsModal] = useState<boolean>(false);

    return (
        <>
            <FullHeader />
            <div className="container basket">
                <BasketBlockContainer />
                {/* {!isBasketEmpty ? <BasketCalcContainer /> : <p className="basket-empty">Корзина пустая</p>} */}
                {!isBasketEmpty ? <OrderFormContainer setIsModal={setIsModal} /> : ""}
                {isModal ? <ModalOrderSubmited setIsModal={setIsModal} /> : ""}
            </div>
            <Footer />
        </>
    )
}