import React, { useState, useEffect } from "react";
import "./allProductsPage.css";
import { FullHeader } from "../../components/fullHeader/index";
import AllProductsCatalogContainer from "../../components/allProductsCatalog/container";
import { Footer } from "../../components/footer/index";
import AllProductsBlockContainer from './../../components/allProductsBlock/container';
import AllProductsHeaderContainer from './../../components/allProductsHeader/container';
import { Loader } from "../../components/loader";

interface Props {
    loadAllProductsBySubs: (subCategories: string[], sortBy: SortType) => void,
}

type SortType = "cheap" | "expensive" | "popular";

export const AllProductsPage: React.FC<Props> = ({ loadAllProductsBySubs }) => {
    const [sort, setSort] = useState<SortType>("popular");
    const [selectedSubs, setSelectedSubs] = useState<string[]>([]);

    useEffect(() => {
        const subId = sessionStorage.getItem("subCategory");
        setSelectedSubs(subId ? [subId] : []);
    }, [setSelectedSubs, sessionStorage.getItem("subCategory")]);

    useEffect(() => loadAllProductsBySubs(selectedSubs, sort), [selectedSubs, setSelectedSubs, sort, setSort]);

    return (
        <>
            <FullHeader />
            <div className="container all-products-container">
                <AllProductsHeaderContainer setSort={setSort} /> 
                <div className="all-products-body">
                    <AllProductsCatalogContainer selectedSubs={selectedSubs} setSelectedSubs={setSelectedSubs} />
                    <AllProductsBlockContainer />
                </div>  
            </div>
            <Footer />
        </>
    )
}