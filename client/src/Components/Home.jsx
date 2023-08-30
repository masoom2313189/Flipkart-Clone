import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Home.scss";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-between" id="main_heading">
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                alt="Grocery"
                className="img-fluid"
              />
              Grocery
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt="Mobiles"
                className="img-fluid"
              />
              Mobiles
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100"
                alt="Fashion"
                className="img-fluid"
              />
              Fashion
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                alt="Electronics"
                className="img-fluid"
              />
              Electronics
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                alt="Home & Furniture"
                className="img-fluid"
              />
              Home & Furniture
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt="Mobiles"
                className="img-fluid"
              />
              Mobiles
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt="Mobiles"
                className="img-fluid"
              />
              Mobiles
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt="Mobiles"
                className="img-fluid"
              />
              Mobiles
            </NavLink>
          </div>
          <div className="col-lg-1 col-md-2 col-4">
            <NavLink to="">
              <img
                src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt="Mobiles"
                className="img-fluid"
              />
              Mobiles
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
