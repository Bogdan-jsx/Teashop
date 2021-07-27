import React from "react"
import { connect } from "react-redux"
import { YouCanLike } from './index';
import { Product } from './../../interafaces';
import { loadYouCanLike } from './../../store/product/actions';

interface Props {
    youCanLikeProducts: Array<Product>,
    loadYouCanLike: (subCategoryId: string) => void,
    subCategoryId: string,
    id: string,
    isLoading: boolean,
    isError: boolean,
}

const YouCanLikeContainer: React.FC<Props> = (props) => ( <YouCanLike {...props} /> );

const mapStateToProps = (state: any) => {
    return { 
        youCanLikeProducts: state.productReducer.youCanLike,
        isLoading: state.productReducer.isCanLikeLoading,
        isError: state.productReducer.isCanLikeError,  
    }
};

const mapDispatchToProps = {
    loadYouCanLike,
}

export default connect(mapStateToProps, mapDispatchToProps)(YouCanLikeContainer);