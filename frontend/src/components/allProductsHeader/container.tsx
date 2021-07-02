import React from "react";
import { connect } from "react-redux";
import { AllProductsHeader } from "./index";
import { Product } from "../../interafaces";

type SortType = "cheap" | "expensive" | "popular";

interface Props {
    productsCount: number,
    setSort: (value: SortType) => void,
}

const AllProductsHeaderContainer: React.FC<Props> = (props) => ( <AllProductsHeader {...props} /> );

const mapStateToProps = (state: any) => {
    return {
        productsCount: state.allProductsCatalogReducer.allProductsInCatalog.length,
    }
}

export default connect(mapStateToProps)(AllProductsHeaderContainer);