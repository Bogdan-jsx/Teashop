import React from "react";
import { connect } from "react-redux";
import { BasketCalc } from "./index";
import { Product } from './../../interafaces';
 
interface Props {
    basketProducts: Array<Product>,
}

const BasketCalcContainer: React.FC<Props> = (props) => ( <BasketCalc {...props} /> )

const mapStateToProps = (state: any) => {
    return {
        basketProducts: state.basketReducer.basketProducts,
    }
}

export default connect(mapStateToProps)(BasketCalcContainer);