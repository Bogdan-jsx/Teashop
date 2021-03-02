import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
    return (
        <Link to="/" className="logo nav-item">
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Logo"/>
            <p>Teashop.by</p>
        </Link>
    )
}