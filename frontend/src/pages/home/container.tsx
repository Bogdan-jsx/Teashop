import React from 'react';
import { connect } from 'react-redux';
import { HomePage } from "./index";
import { loadMain } from "../../store/home/actions";
import { loadCategories } from "../../store/catalog/actions";
import { CatalogCategory, SectionAttr } from "../../interafaces";

interface Props {
    categories: CatalogCategory[],
    mainProducts: SectionAttr[],
    loadMain: (subCategoryId: string) => void,
    loadCategories: () => void,
}

const HomeContainer: React.FC<Props> = (props) => {
    return <HomePage  {...props} />
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        categories: state.categoriesReducer.categories,
        mainProducts: state.homeReducer.mainProducts,
    }
}

const mapDispatchToProps = {
    loadMain,
    loadCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);