import React, { useState } from "react";
import { Header } from "../header/index";
import CatalogContainer from "../catalog/container";
import "./style.css";

export const FullHeader: React.FC = () => {
    const [isCatalogOpened, setIsCatalogOpened] = useState<boolean>(false);

    return (
        <>
        <Header isCatalogOpened={isCatalogOpened} setIsCatalogOpened={setIsCatalogOpened} />
        <div className={isCatalogOpened ? "container catalog-opened" : "container"} >
            <CatalogContainer isCatalogOpened={isCatalogOpened} />
        </div>
        </>
    )
}