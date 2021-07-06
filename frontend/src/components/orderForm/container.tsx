import React from "react";
import { connect } from "react-redux";
import { sendOrder } from "../../store/basket/actions";
import { OrderForm } from "./index";
import { BasketProductBasic } from './../../interafaces';

interface Props {
    sendOrder: (basket: BasketProductBasic[], name: string, phone: string, comment: string, address: string) => void,
}

const OrderFormContainer: React.FC<Props> = (props) => ( <OrderForm {...props} /> );

const mapStateToProps = (state: any) => {
    return ({});
}

const mapDispatchToProps = {
    sendOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormContainer);