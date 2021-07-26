import React from "react";

export const Loader: React.FC = () => {
    return (
        <img src={process.env.PUBLIC_URL + "/img/spinner.gif"} alt="" style={ { width: "150px" } } />
    )
}