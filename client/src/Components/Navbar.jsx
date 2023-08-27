import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import pluslogo from "../Images/pluslogo.png";
import { NavLink } from "react-router-dom";
import "../Sass/Navbar.scss";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink id="logo" className="navbar-brand" to="">
            <h3>
              <i>Flipkart</i>
            </h3>
            <small>
              <i>
                Explore{" "}
                <span>
                  Plus
                  <StarOutlineIcon fontSize="small" />
                </span>
              </i>
            </small>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <input type="text" id="search" />
                <SearchIcon id="search_icon" />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
