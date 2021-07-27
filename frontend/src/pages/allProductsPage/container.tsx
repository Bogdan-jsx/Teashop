import React from "react";
import { AllProductsPage } from "./index";
import { connect } from "react-redux";
import { loadAllProductsBySubs } from './../../store/allProducts/actions';

interface Props {
    loadAllProductsBySubs: (subCategories: string[], sortBy: "cheap" | "expensive" | "popular") => void,
}

const AllProductsPageContainer: React.FC<Props> = (props) => ( <AllProductsPage {...props} /> );

const mapStateToProps = (state: any) => {
    return {};
}

const mapDispatchToProps = {
    loadAllProductsBySubs,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPageContainer);