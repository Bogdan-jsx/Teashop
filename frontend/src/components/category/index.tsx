import React, { useState } from "react";
import { CatalogCategory } from './../../interafaces';
import { SubCategory } from './../subCategory/index';

interface Props {
    category: CatalogCategory,
    selectedSubs: string[],
    setSelectedSubs: (value: string[]) => void,
}

export const Category: React.FC<Props> = ({ category, selectedSubs, setSelectedSubs }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleOpened = () => {
        isOpened ? setIsOpened(false) : setIsOpened(true);
    }

    return (
        <li 
            className={selectedSubs.some((_selectedId) => category.subCategories.some((sub) => _selectedId === sub.id)) ? "selected menu__item" : "menu__item"}>
            <span className="material-icons">
                {isOpened ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
            <p onClick={toggleOpened.bind(null)}>{category.name}</p>
            <ul className="sub-categories" style={{display: `${isOpened ? "block" : "none"}`}}>
                {category && category.subCategories.map((item) => {
                    return <SubCategory subCategory={item} key={item.name} selectedSubs={selectedSubs} setSelectedSubs={setSelectedSubs} />
                })}
            </ul>
        </li>
    )
}