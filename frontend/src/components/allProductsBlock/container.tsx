import React from "react";
import { AllProductsBlock } from "./index";
import { Product } from "../../interafaces";
import { connect } from "react-redux";

interface Props {
    products: Product[],
}

const AllProductsBlockContainer: React.FC<Props> = (props) => ( <AllProductsBlock {...props} />);

const mapStateToProps = (state: any) => ( { products: state.allProductsCatalogReducer.allProductsInCatalog } );

export default connect(mapStateToProps)(AllProductsBlockContainer);