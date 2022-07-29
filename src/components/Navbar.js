import "../styles/Navbar.css";
import logo from "../assets/pizzaLogo.png";

import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} alt="logo"/>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
