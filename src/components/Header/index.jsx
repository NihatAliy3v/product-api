import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <div className="logo">
              <Link className="logoLink" to="/">
                LOGO
              </Link>
            </div>
            <ul className="navList">
              <li className="navItem">
                <Link className="navLink" to="/">
                  Home
                </Link>
                <Link className="navLink" to="/products">
                  Products
                </Link>
                <Link className="navLink" to="/createProduct">
                  Create
                </Link>
              </li>
            </ul>
            <div className="social">
              <Link className="socialLink" to="">
                Instagram
              </Link>
              <Link className="socialLink" to="">
                Facebook
              </Link>
              <Link className="socialLink" to="">
                Linkedin
              </Link>
              <Link className="socialLink" to="">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
