import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

export const SearchInput: React.FC = () => {
    const searchInp = useRef<HTMLInputElement>(null);
    const history = useHistory();

    const search = (e: React.KeyboardEvent) => {
        if (e.code === "Enter") {
            const searchReq = searchInp.current?.value as string;
            if (searchReq) {
                history.push(`/search?q=${searchReq}`);
            }
        }
    }

    return (
        <li><input type="text" className="search nav-item" placeholder="Поиск по товарам" ref={searchInp} onKeyPress={search} /></li>
    )
}