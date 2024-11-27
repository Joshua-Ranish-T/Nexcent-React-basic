import React from "react";
import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header-content">
        <a href="#">
          <p>Home</p>
        </a>
        <a href="#">
          <p>Service</p>
        </a>
        <a href="#">
          <p>Feature</p>
        </a>
        <a href="#">
          <p>Product</p>
        </a>
        <a href="#">
          <p>Testimonial</p>
        </a>
        <a href="#">
          <p>FAQ</p>
        </a>
      </div>
      <div className="header-login">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
