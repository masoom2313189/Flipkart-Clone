import React from "react";
import "../Sass/Login.scss";
import loginimg from "../Images/login.png";

const Login = () => {
  return (
    <div>
      {/* Modal  */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg col-md-12">
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
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required
                    />
                    <label for="floatingInput">Enter Email/Mobile Number</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      required
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <small>
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </small>
                  <button
                    class="btn btn-primary mb-3 mt-3 col-12 btn-lg"
                    type="submit"
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
