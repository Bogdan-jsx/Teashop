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
}

const YouCanLikeContainer: React.FC<Props> = (props) => ( <YouCanLike {...props} /> );

const mapStateToProps = (state: any) => ({ youCanLikeProducts: state.productReducer.youCanLike });

const mapDispatchToProps = {
    loadYouCanLike,
}

export default connect(mapStateToProps, mapDispatchToProps)(YouCanLikeContainer);