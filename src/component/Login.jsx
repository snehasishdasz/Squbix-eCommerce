import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form className="text-center border border-light p-5" action="#!">
        <p className="h4 mb-4">Sign in</p>

        <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

        <div className="d-flex justify-content-around">
          <div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
              <label className="custom-control-label" htmlFor="defaultLoginFormRemember">
                Remember me
              </label>
            </div>
          </div>
          <div>
            <a href="">Forgot password?</a>
          </div>
        </div>

        <button className="btn btn-info btn-block my-4" type="submit">
          Sign in
        </button>

        <p>
          Not a member? <NavLink to="/register">Register</NavLink>
        </p>

      </form>
    </div>
  );
};

export default Login;
