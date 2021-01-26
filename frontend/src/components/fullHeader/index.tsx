import React, { useState } from "react";
import { Header } from "../header/index";
import { Catalog } from "../catalog/index";

export const FullHeader: React.FC = () => {
    const [isCatalogOpened, setIsCatalogOpened] = useState<boolean>(false);

    return (
        <>
        <Header isCatalogOpened={isCatalogOpened} setIsCatalogOpened={setIsCatalogOpened} />
        <div className="container">
            <Catalog isCatalogOpened={isCatalogOpened} />
        </div>
        </>
    )
}