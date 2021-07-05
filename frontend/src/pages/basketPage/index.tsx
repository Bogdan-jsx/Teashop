import React, { useState } from "react";
import "./basketPage.css";
import { FullHeader } from "../../components/fullHeader/index";
import { OrderForm } from "../../components/orderForm/index";
import { Footer } from "../../components/footer/index";
import BasketBlockContainer from './../../components/basketBlock/container';
import BasketCalcContainer from './../../components/basketCalc/container';

interface Props {
    isBasketEmpty: boolean,
}

export const BasketPage: React.FC<Props> = ({ isBasketEmpty }) => {
    return (
        <>
            <FullHeader />
            <div className="container basket">
                <BasketBlockContainer />
                {!isBasketEmpty ? <BasketCalcContainer /> : <p className="basket-empty">Корзина пустая</p>}
                {!isBasketEmpty ? <OrderForm /> : ""}
                
            </div>
            <Footer />
        </>
    )
}