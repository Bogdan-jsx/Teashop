import React, { useEffect } from 'react';
import "./home.css";
import { FullHeader } from "../../components/fullHeader/index";
import { Section } from "../../components/section/index";
import { Footer } from "../../components/footer/index";
import { CatalogCategory, SectionAttr } from "../../interafaces";

interface Props {
    categories: CatalogCategory[],
    mainProducts: SectionAttr[],
    loadMain: (subCategoryId: string) => void,
    loadCategories: () => void,
}

export const HomePage: React.FC<Props> = ({ categories, mainProducts, loadMain, loadCategories }) => {
    useEffect(() => loadCategories(), [loadCategories]);
    useEffect(() => {
        loadMain(categories[1]?.subCategories[0]?.id);
        loadMain(categories[1]?.subCategories[1]?.id);
    }, [categories, loadMain, loadCategories])

    return (
        <>
            <FullHeader />
            <div className="container">
                <main>
                    <img src="img/main-img.png" />
                    <div className="content">
                        {mainProducts && mainProducts.map(item => {
                            return <Section section={item} key={item.name} />
                        })}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}