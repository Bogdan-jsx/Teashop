import React from "react";
import { connect } from "react-redux";
import { ProductPage } from "./index";
import { Product } from "../../interafaces";
import { loadProduct } from "../../store/product/actions";

interface Props {
    product: Product,
    loadProduct: (id: string) => void,
    isLoading: boolean,
    isError: boolean,
}

const ProductContainer: React.FC<Props> = (props) => ( <ProductPage {...props} /> )

const mapStateToProps = (state: any) => {
    return { 
        product: state.productReducer.product,
        isLoading: state.productReducer.isLoading,
        isError: state.productReducer.isError, 
    }
}

const mapDispatchToProps = {
    loadProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);