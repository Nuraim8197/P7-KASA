import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";



export default function Navbar() {
    return (
        <div className="nav-header">
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="nav-header_link-home">
				    Accueil
			    </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-header_link-about">
				    A Propos
			    </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
}
