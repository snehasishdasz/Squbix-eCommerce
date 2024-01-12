import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form className="text-center border border-light p-5" action="#!">
        <p className="h4 mb-4">Register</p>

        <div className="row">
          <div className="col-md-6 mb-4">
            <input type="text" id="firstName" className="form-control" placeholder="First Name" />
          </div>
          <div className="col-md-6 mb-4">
            <input type="text" id="lastName" className="form-control" placeholder="Last Name" />
          </div>
        </div>

        <input type="email" id="registerFormEmail" className="form-control mb-4" placeholder="E-mail" />

        <input type="password" id="registerFormPassword" className="form-control mb-4" placeholder="Password" />

        <input type="password" id="confirmPassword" className="form-control mb-4" placeholder="Confirm Password" />

        <div className="d-flex justify-content-around">
          <div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="agreeTerms" />
              <label className="custom-control-label" htmlFor="agreeTerms">
                Agree to terms
              </label>
            </div>
          </div>
        </div>

        <button className="btn btn-info btn-block my-4" type="submit">
          Register
        </button>

        <p>
          Already a member? <NavLink to= "/login">Sign in</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
