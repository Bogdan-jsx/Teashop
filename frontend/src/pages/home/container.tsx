import React from 'react';
import { connect } from 'react-redux';
import { HomePage } from "./index";
import { loadMain } from "../../store/home/actions";
import { CatalogCategory, SectionAttr } from "../../interafaces";

interface Props {
    categories: CatalogCategory[],
    mainProducts: SectionAttr[],
    isLoading: boolean,
    loadMain: (subCategoryIds: string[]) => void,
    isError: boolean,
}

const HomeContainer: React.FC<Props> = (props) => {
    return <HomePage  {...props} />
}

const mapStateToProps = (state: any) => {
    return {
        categories: state.categoriesReducer.categories,
        mainProducts: state.homeReducer.mainProducts,
        isLoading: state.homeReducer.isLoading,
        isError: state.homeReducer.isError,
    }
}

const mapDispatchToProps = {
    loadMain,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);