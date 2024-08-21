import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {
    const links = dogs.map(d => (
        <NavLink
         key={d.name}
         to={`/dogs/${d.name.toLowerCase()}`}>
            {d.name}
         </NavLink>
    ));

    return (
        <nav>
            <NavLink to="/dogs">
                Home
            </NavLink>
            {links}
        </nav>
    )
}

export default NavBar;