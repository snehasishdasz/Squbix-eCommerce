import React from "react";
// import {a} from "react-router-dom";

function Navbar() {
    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" to="/">
          <img width="150" height="50" src="/assets/logo2.png" alt="" />
          {/* <span class="text-warning">S</span>D <span>M</span>art */}
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
                <a to="/login" className="btn btn-outline-light">
                   <i className="fa fa-sign-in me-1"></i> Login</a>
                <a to="/register" className="btn btn-outline-light ms-2">
                   <i className="fa fa-user-plus me-1"></i> Register</a>
                <a to="/cart" className="btn btn-outline-light ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Cart</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
}

export default Navbar;
