import React from 'react';

interface Subcategory {
    name: string,
    _id: number,
}

interface CatalogCategory {
    name: string,
    subcategories: Array<Subcategory>,
    _id: number,
}

interface Props {
    category: CatalogCategory,
    toggleCategory: Function,
    selectedSubs: string[],
}

export const SubCategories: React.FC<Props> = ({category, toggleCategory, selectedSubs}) => {
    return (
        <ul className="sub-categories">
            {category && category.subcategories.map((item: Subcategory) => {
                return <li onClick={toggleCategory.bind(null, category, item.name)} key={item._id} 
                            className={selectedSubs.indexOf(item.name) != -1 ? "selected sub-category" : "sub-category"}>
                            <span className="material-icons">{selectedSubs.indexOf(item.name) != -1 ? "done" : ""}</span>
                            <p>{item.name}</p>
                        </li>
            })}
        </ul>
    )
}