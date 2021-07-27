import React from "react";
import { AllProductsBlock } from "./index";
import { Product } from "../../interafaces";
import { connect } from "react-redux";

interface Props {
    products: Product[],
    isLoading: boolean,
    isError: boolean,
}

const AllProductsBlockContainer: React.FC<Props> = (props) => ( <AllProductsBlock {...props} />);

const mapStateToProps = (state: any) => { 
    return {
        products: state.allProductsCatalogReducer.allProductsInCatalog,
        isLoading: state.allProductsCatalogReducer.isLoading, 
        isError: state.allProductsCatalogReducer.isError,
    } 
};

export default connect(mapStateToProps)(AllProductsBlockContainer);