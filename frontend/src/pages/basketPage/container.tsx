import React from "react";
import { connect } from "react-redux";
import { BasketPage } from "./index";

interface Props {
    isBasketEmpty: boolean,
}

const BasketPageContainer: React.FC<Props> = (props) => ( <BasketPage {...props} /> )

const mapStateToProps = (state: any) => {
    return {
        isBasketEmpty: state.basketReducer.basketProducts.length !== 0 ? false : true,
    }
}

export default connect(mapStateToProps)(BasketPageContainer);