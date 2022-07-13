import React from "react";
import { connect } from "react-redux";
import { ProductCard } from ".";
import { loadProduct } from "../../store/product/actions";
import { Product } from "../../interafaces";

interface Props {
    loadProduct: (id: string) => void;
    product: Product;
}

const ProductCardContainer: React.FC<Props> = (props) => ( <ProductCard {...props} /> )

const mapStateToProps = (state: any) => {
    return {}
};

const mapDispatchToProps = {
    loadProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);