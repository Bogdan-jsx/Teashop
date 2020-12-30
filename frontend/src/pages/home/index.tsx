import React, { useState } from 'react';
import { Header } from "../../components/header/index";
import { Catalog } from "../../components/catalog/index";

export const HomePage: React.FC = () => {
    const [isCatalogOpened, setIsCatalogOpened] = useState<boolean>(false);
    return (
        <div>
            <Header isCatalogOpened={isCatalogOpened} setIsCatalogOpened={setIsCatalogOpened} />
            <div className="container">
                <Catalog isCatalogOpened={isCatalogOpened} />
            </div>
        </div>
    );
}