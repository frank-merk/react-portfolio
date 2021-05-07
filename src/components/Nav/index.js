import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Frank Merchlewitz</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;