import React from "react";
import "../css/navbar.css";
import ojos from "../assets/eyes.gif";
import { NavLink, Link } from "react-router-dom";

const NavbarApp = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-file-o" aria-hidden="true"></i> GIF MASTER
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/category/reactions">
                Reactions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/entertainment">
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/sports">
                Sports
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li>
              <img className="img-login" src={ojos} alt="avatar" />
              <button className="btn btn-secondary btn-login">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
