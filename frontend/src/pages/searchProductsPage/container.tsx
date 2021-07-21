import React from "react";
import { SearchProductsPage } from "./index";
import { connect } from "react-redux";
import { Product } from "../../interafaces";
import { loadSearchResult } from './../../store/allProducts/actions';

interface Props {
    products: Product[],
    location: any,
    loadSearchResult: (searchReq: string) => void,
}

const SearchProductsPageContainer: React.FC<Props> = (props) => ( <SearchProductsPage {...props} /> );

const mapStateToProps = (state: any) => {
    return {
        products: state.allProductsCatalogReducer.searchResultProducts,
    }
}

const mapDispatchToProps = {
    loadSearchResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductsPageContainer);