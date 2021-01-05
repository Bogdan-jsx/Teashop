import React, { useState } from 'react';
import "./home.css";
import { Header } from "../../components/header/index";
import { Catalog } from "../../components/catalog/index";
import { Section } from "../../components/section/index"
import { Footer } from "../../components/footer/index";

export const HomePage: React.FC = () => {
    const [isCatalogOpened, setIsCatalogOpened] = useState<boolean>(false);
    return (
        <>
            <Header isCatalogOpened={isCatalogOpened} setIsCatalogOpened={setIsCatalogOpened} />
            <div className="container">
                <Catalog isCatalogOpened={isCatalogOpened} />
                <main>
                    <img src="img/main-img.png" />
                    <div className="content">
                        <Section sectionName={"Пуэр"} />
                        <Section sectionName={"Улун"} />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}