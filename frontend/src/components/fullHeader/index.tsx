import React, { useState } from "react";
import CatalogContainer from "../catalog/container";
import "./style.css";
import HeaderContainer from './../header/container';

export const FullHeader: React.FC = () => {
    const [isCatalogOpened, setIsCatalogOpened] = useState<boolean>(false);

    return (
        <>
        <HeaderContainer isCatalogOpened={isCatalogOpened} setIsCatalogOpened={setIsCatalogOpened} />
        <div className={isCatalogOpened ? "container catalog-opened" : "container"} >
            <CatalogContainer isCatalogOpened={isCatalogOpened} />
        </div>
        </>
    )
}