import "./Navbar.css";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./Darkmode";
function Navbar(){
    return(
        <section className="nav">
           <nav>
            <NavLink to="/">page 1</NavLink>
            <NavLink to="/Bage2">page 2</NavLink>
           </nav>
            <DarkModeToggle/>
        </section>

    )
}
export default Navbar;