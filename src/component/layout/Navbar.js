import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand " exact to="/">
          <b>Contact Manager</b>
        </NavLink>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-outline-light" exact to="/adduser">
          Add User
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
