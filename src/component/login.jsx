
import React from "react";
import "../component/login.css";
import zee99Logo from "../assets/zee99-logo.png";

export default function LoginPage({ onDemoLogin }) {
  return (
    <div className="login-page">
      <div className="login-container">

        {/* Logo */}
        <div className="login-logo">
          <img src={zee99Logo} alt="ZEE99 Logo" />
        </div>

        {/* Welcome text */}
        {/* <div className="login-heading">
          <h2>Welcome to ZEE99</h2>
          <p>Login to continue</p>
        </div> */}

        {/* Login form */}
        <div className="login-form">
          <div className="login-input-group">
            {/* <label>Username</label> */}
            <input
              type="text"
              placeholder="Enter your username"
            />
          </div>

          <div className="login-input-group">
            {/* <label>Password</label> */}
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="forgot-password">
            <span>Forgot Password?</span>
          </div>

          <button className="demo-login-button" type="button">
            LOGIN
          </button>
           <button
          className="demo-login-button"
          type="button"
          onClick={onDemoLogin}
        >
          Login with Demo
        </button>
        <p className="captcha-txt">This site is protected by reCAPTCHA and the Google <a className="terms-txt">Privacy Policy</a> and <a className="terms-txt">Terms of Service</a> apply. </p>
        </div>
       

        {/* Demo login */}
       

      </div>
    </div>
  );
}
