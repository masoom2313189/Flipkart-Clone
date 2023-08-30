import React from "react";
import "../Sass/Login.scss";
import loginimg from "../Images/login.png";

const Login = () => {
  return (
    <div>
      {/* Button trigger modal */}
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      {/* Modal  */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div className="row" id="login">
              <div className="col-4" id="login_head">
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
                <img src={loginimg} alt="image" className="img-fluid" />
              </div>
              <div className="col-8" id="login_main">
                <form>
                  <div class="form-floating mb-3">
                    <input
                      type="email/number"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Enter Email/Mobile Number</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <button
                    class="btn btn-primary mb-3 col-12 btn-lg"
                    type="button"
                  >
                    Button
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
