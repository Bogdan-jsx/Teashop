import React from "react";
import { BasketBlock } from "./index";
import { connect } from "react-redux";
import { loadBasketProducts } from "../../store/basket/actions";
import { BasketProductBasic } from './../../interafaces';
import { Product } from "../../interafaces";

interface Props {
    loadBasketProducts: (productsBasic: BasketProductBasic[]) => void,
    basketProducts: Product[],
}

const BasketBlockContainer: React.FC<Props> = (props) => ( <BasketBlock {...props} /> );

const mapStateToProps = (state: any) => ( { basketProducts: state.basketReducer.basketProducts } );

const mapDispatchToProps = {
    loadBasketProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketBlockContainer);