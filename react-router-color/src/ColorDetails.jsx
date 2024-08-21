import { Link, useParams, Navigate } from "react-router-dom";
import "./ColorDetails.css";

function ColorDetails({ colors }) {
    const params = useParams();


    // if color does not exist, reroute back to colors home page
    const validColors = colors.map(c => c.colorName);
    if (!validColors.includes(params.name)) {
        return <Navigate to="/colors" />;
    }

    let colorName;

    // find the color's RGB value based on param name
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].colorName === params.name) {
            colorName = colors[i].colorName.toUpperCase();
            document.body.style.backgroundColor = colors[i].colorValue;
            break;
        }
    }

    return(
        <div className="ColorDetails">
            <div className="ColorDetails-text">
                <p>THIS IS {colorName}.</p>
                <p>ISN'T IT BEAUTIFUL?</p>
            </div>
            <div className="ColorDetails-back">
                <Link to="/colors">GO BACK</Link>
            </div>
        </div>
    )
}

export default ColorDetails;