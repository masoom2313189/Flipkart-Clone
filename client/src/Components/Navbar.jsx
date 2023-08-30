import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "../Sass/Navbar.scss";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "./Login";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink id="logo" className="navbar-brand" to="">
            <h4>
              <i>Flipkart</i>
            </h4>
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
              <li className="nav-item" id="searchBox">
                <input
                  class="input"
                  type="text"
                  placeholder="Search for products, brands and more"
                />
                <div>
                  <SearchIcon id="search_icon" />
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active login"
                  aria-current="page"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  type="button"
                >
                  Login
                </NavLink>
                <Login />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="#">
                  Become a Seller
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="#">
                  More
                  <KeyboardArrowDownIcon fontSize="small" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="#">
                  <ShoppingCartIcon />
                  Cart
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
