import React from "react";
import { connect } from 'react-redux';
import { AllProductsCatalog } from './index';
import { CatalogCategory } from './../../interafaces';
import { loadCategories } from './../../store/catalog/actions';

interface Props {
    categories: Array<CatalogCategory>,
    loadCategories: () => void,
    selectedSubs: string[],
    setSelectedSubs: (value: string[]) => void,
    isError: boolean,
}

const AllProductCatalogContainer: React.FC<Props> = (props) => ( <AllProductsCatalog {...props} /> )

const mapStateToProps = (state: any) => { 
    return {
        categories: state.categoriesReducer.categories,
        isError: state.categoriesReducer.isCategoriesError,
    } 
};

const mapDispatchToProps = {
    loadCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductCatalogContainer);