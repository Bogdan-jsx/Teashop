import React from 'react';
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import "./productCard.css";
import { Product } from "../../interafaces";

interface Props {
    product: Product,
    loadProduct: (id: string) => void;
}

export const ProductCard: React.FC<Props> = ({product, loadProduct}) => {
    const discount: number = product.discount;
    let price: number = product.price;
    if (discount != 0) {
        price = price - price / 100 * discount;
    }

    const history = useHistory();

    return (
        // <Link to={`/product/${product.id}`} className="product">
        <div className='product' onClick={() => {
            history.push(`/product/${product.id}`);
            loadProduct(product.id);
        }}>
            <div>
                <div className="product-card-img tea-10" style={{ backgroundImage: `url(http://localhost:3000/image/${product.images[0]})` }}></div>
                <div className="info">
                    <p className="cost"><strong>{price}р</strong> / 100гр</p>
                    <span className="original-cost"><p>{discount != 0 ? `${product.price}р` : ''}</p></span>
                    <p className="discount">{discount != 0 ? `-${discount}%` : ""}</p>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </div>
                <p className="name">{product.name}</p>
            </div>
        </div>
        //</Link>
    );
}