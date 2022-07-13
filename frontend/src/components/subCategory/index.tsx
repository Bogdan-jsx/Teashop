import React, { useState } from "react";
import { Subcategory } from "../../interafaces";

interface Props {
    subCategory: Subcategory,
    selectedSubs: string[],
    setSelectedSubs: (value: string[]) => void,
}

export const SubCategory: React.FC<Props> = ({ subCategory, selectedSubs, setSelectedSubs }) => {
    const toggleSelected = () => {
        if (selectedSubs.includes(subCategory.id)) {
            let updatedSelectedSubs = [...selectedSubs];
            const index = updatedSelectedSubs.indexOf(subCategory.id)
            updatedSelectedSubs.splice(index, 1)
            setSelectedSubs(updatedSelectedSubs);
        } else {
            let updatedSelectedSubs = [...selectedSubs];
            updatedSelectedSubs.push(subCategory.id);
            setSelectedSubs(updatedSelectedSubs);
        }
    }

    return (
        <li onClick={toggleSelected.bind(null)}
            className={selectedSubs.includes(subCategory.id) ? "selected sub-category" : "sub-category"}>
            <span className="material-symbols-outlined">{selectedSubs.includes(subCategory.id) ? "done" : ""}</span>
            <p>{subCategory.name}</p>
        </li>
    )
}