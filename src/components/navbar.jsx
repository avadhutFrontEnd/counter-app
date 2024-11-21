import React from "react";

// Stateless  Functional Component

// use `object destructuring`  to destructure this "props" Argument
const NavBar = ({ totalCounters }) => {  
  console.log('NavBar - Rendered');
  
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secoundary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
