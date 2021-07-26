import React from 'react';
import { connect } from "react-redux";
import { Catalog } from "./index";
import { loadCatalogProducts, loadCategories } from './../../store/catalog/actions';
import { Product, CatalogCategory } from "../../interafaces";

interface ContainerProps {
    categories: Array<CatalogCategory>,
    isCatalogOpened: boolean,
    catalogProducts: Array<Product>,
    loadCatalogProducts: () => void,
    loadCategories: () => void,
}

const CatalogContainer: React.FC<ContainerProps> = (props) => {
    return <Catalog {...props} />
}

const mapStateToProps = (state: any) => {
    return {
        categories: state.categoriesReducer.categories,
        catalogProducts: state.categoriesReducer.catalogProducts,
    }
}

const mapDispatchToProps = {
    loadCatalogProducts,
    loadCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);