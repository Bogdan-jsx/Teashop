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
}

const AllProductCatalogContainer: React.FC<Props> = (props) => ( <AllProductsCatalog {...props} /> )

const mapStateToProps = (state: any) => ( { categories: state.categoriesReducer.categories } );

const mapDispatchToProps = {
    loadCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductCatalogContainer);