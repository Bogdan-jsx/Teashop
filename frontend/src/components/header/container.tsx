import React from "react";
import { connect } from "react-redux";
import { Header } from ".";
import { setBasketCount } from "../../store/basket/actions";

interface Props {
    isCatalogOpened: boolean,
    setIsCatalogOpened: (value: boolean) => void,
    setBasketCount: (count: number) => void,
    basketCount: number,
}

const HeaderContainer: React.FC<Props> = (props) => ( <Header {...props} /> );

const mapStateToProps = (state: any) => {
    return {
        basketCount: state.basketReducer.basketCount,
    }
}

const mapDispatchToProps = {
    setBasketCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
