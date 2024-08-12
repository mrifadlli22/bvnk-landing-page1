import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <img src="./Images/BVNK (1).png" alt="Logo" className="logo" />
        <div className="subtitle">User Login</div>
        <form>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <a href="/forgotpassword" className="forgot-password-link">Forgot Password?</a>
          <button type="submit" className="btn btn-login">Login to Your Account</button>

          {/* Divider "or" */}
          <div className="divider">OR</div>

          <button type="button" className="btn btn-google">
            <i className="fab fa-google"></i> Sign in with Google
          </button>
          <button type="button" className="btn btn-apple">
            <i className="fab fa-apple"></i> Sign in with Apple
          </button>
          <a href="/register" className="register-link">Haven't registered yet? Click here to register!</a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
