// import { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorsList.css"

function ColorsList({ colors }) {
    // list out each color
    const colorsList = colors.map(c => (
        <div key={c.colorName}>
            <Link to={`/colors/${c.colorName}`}>
                {c.colorName}
            </Link>
        </div>
    ));

    // reset background color on re-render
    document.body.style.backgroundColor = "rgb(255, 255, 255)";


    return(
        <div className="ColorsList">
            <div className="ColorsList-header">
                <h1>Welcome to the color factory!</h1>
                <Link to="/colors/new">
                    Add a Color!
                </Link>
            </div>
            <div className="ColorsList-list">
                {colorsList}
            </div>
        </div>
    )
}

export default ColorsList;