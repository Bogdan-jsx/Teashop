import React from 'react';
import { Subcategory, CatalogCategory } from "../../interafaces";

interface Props {
    category: CatalogCategory,
    toggleCategory: Function,
    selectedSubs: string[],
}

export const SubCategories: React.FC<Props> = ({category, toggleCategory, selectedSubs}) => {
    return (
        <ul className="sub-categories">
            {category && category.subCategories.map((item: Subcategory) => {
                return <li onClick={toggleCategory.bind(null, category, item.name)} key={item.id} 
                            className={selectedSubs.indexOf(item.name) != -1 ? "selected sub-category" : "sub-category"}>
                            <span className="material-icons">{selectedSubs.indexOf(item.name) != -1 ? "done" : ""}</span>
                            <p>{item.name}</p>
                        </li>
            })}
        </ul>
    )
}