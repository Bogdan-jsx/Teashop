import React from "react";
import "./sortBy.css";

export const SortBy: React.FC = () => {
    return (
        <div className="sort-by">
            <select>
                <option selected>По популярности</option>
                <option>Дешевые</option>
                <option>Дорогие</option>
            </select>
        </div>
    )
}