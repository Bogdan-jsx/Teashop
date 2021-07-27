import React from "react";
import { BasketBlock } from "./index";
import { connect } from "react-redux";
import { loadBasketProducts } from "../../store/basket/actions";
import { BasketProductBasic } from './../../interafaces';
import { Product } from "../../interafaces";

interface Props {
    loadBasketProducts: (productsBasic: BasketProductBasic[]) => void,
    basketProducts: Product[],
    isLoading: boolean,
    isError: boolean,
}

const BasketBlockContainer: React.FC<Props> = (props) => ( <BasketBlock {...props} /> );

const mapStateToProps = (state: any) => { 
    return { 
        basketProducts: state.basketReducer.basketProducts,
        isLoading: state.basketReducer.isLoading,
        isError: state.basketReducer.isError, 
    } 
};

const mapDispatchToProps = {
    loadBasketProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketBlockContainer);