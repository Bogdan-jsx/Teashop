import React, { BaseSyntheticEvent, SyntheticEvent } from "react";
import "./sortBy.css";

type SortType = "cheap" | "expensive" | "popular";

interface Props {
    setSort: (value: SortType) => void,
}

export const SortBy: React.FC<Props> = ({ setSort }) => {
    const sort = (event: BaseSyntheticEvent) => {
        setSort(event.target.value);
    }

    return (
        <div className="sort-by">
            <select defaultValue="popular" onChange={sort}>
                <option value="popular">По популярности</option>
                <option value="cheap">Дешевые</option>
                <option value="expensive">Дорогие</option>
            </select>
        </div>
    )
}