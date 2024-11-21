import React from "react";

// Stateless  Functional Component

// in functional components,  you need to add "props" as a parameter here
const NavBar = (props) => {  
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secoundary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
