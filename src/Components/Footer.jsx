import React from "react";
import footerlogo from "../assets/footerlogo.png";
import basket from "../assets/Icons.png";
import twiter from "../assets/ons.png";
import yt from "../assets/Social Ics.png";
//import arrow from "../assets/Vector.png";
import right from "../assets/Right.png";
import insta from "../assets/cons.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1 className="fttp">Pellentesque suscipt</h1>
        <h1>frinjilla leberou eu</h1>
        <button>
          Get a demo
          <img src={right} alt="" />
        </button>
      </div>
      <div className="footer-bottom">
        <div className="flogo">
          <img src={footerlogo} alt="" />
          <p>copyright @ 2020 nexcent ltd</p>
          <p>All rights reserved</p>
          <a href="">
            <img src={insta} alt="" />
          </a>
          <a href="">
            <img src={basket} alt="" />
          </a>
          <a href="">
            <img src={twiter} alt="" />
          </a>
          <a href="">
            <img src={yt} alt="" />
          </a>
        </div>
        <div className="details">
          <div className="company">
            <h2>Company</h2>
            <a href="">
              <p>About us</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
            <a href="">
              <p>Contact us</p>
            </a>
            <a href="">
              <p>Pricing</p>
            </a>
            <a href="">
              <p>Testimonials</p>
            </a>
          </div>
          <div className="support">
            <h2>Support</h2>
            <a href="">
              <p>Help center</p>
            </a>
            <a href="">
              <p>Terms of service</p>
            </a>
            <a href="">
              <p>Legal</p>
            </a>
            <a href="">
              <p>Privacy policy</p>
            </a>
            <a href="">
              <p>Status</p>
            </a>
          </div>
          <div className="address">
            <h2>Stay up to date</h2>
            <input type="email" placeholder="Your email address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
