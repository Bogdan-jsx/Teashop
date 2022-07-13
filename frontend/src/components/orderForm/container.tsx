import React from "react";
import { connect } from "react-redux";
import { sendOrder, putBasketProducts } from "../../store/basket/actions";
import { OrderForm } from "./index";
import { BasketProductBasic, Product } from './../../interafaces';
import { setBasketCount } from './../../store/basket/actions';

interface Props {
    sendOrder: (basket: BasketProductBasic[], name: string, phone: string, comment: string, address: string) => void,
    setIsModal: (value: boolean) => void,
    setBasketCount: (count: number) => void,
}

const OrderFormContainer: React.FC<Props> = (props) => ( <OrderForm {...props} /> );

const mapStateToProps = (state: any) => {
    return ({});
}

const mapDispatchToProps = {
    sendOrder,
    setBasketCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormContainer);