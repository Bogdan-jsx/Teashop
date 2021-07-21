import React, { useEffect } from "react";
import "./style.css";
import { Product } from "../../interafaces";
import { FullHeader } from './../../components/fullHeader/index';
import { Footer } from './../../components/footer/index';
import { AllProductsBlock } from './../../components/allProductsBlock/index';

interface Props {
    products: Product[],
    location: any,
    loadSearchResult: (searchReq: string) => void,
}

export const SearchProductsPage: React.FC<Props> = ({products, location, loadSearchResult}) => {
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.getAll("q")[0];
        loadSearchResult(searchQuery)
    }, [location])

    return (
        <>
            <FullHeader />
             <div className="container">
                <div className="results-header">
                    <h2>Результаты поиска</h2>
                    <p>{products.length}</p>
                </div>
                <AllProductsBlock products={products} />
             </div>
            <Footer />
        </>
    )
}