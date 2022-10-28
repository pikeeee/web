import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
        return(
            <ul>
                <li>
                    <Link to="/">Information</Link>
                </li>
                <li>
                <Link to="/test">Todo List App</Link>
                </li>
            </ul>
        );
}
export default Navbar
