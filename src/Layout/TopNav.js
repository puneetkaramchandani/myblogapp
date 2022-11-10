import * as React from "react";
import logo from "../Assets/images/logo.png";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid ps-lg-5">
        <a className="navbar-brand" href="/">
          <img height={35} alt="Blog Studio" src={logo}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav  fs-4 font-monospace pe-lg-5 me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
            <li className="nav-item me-lg-5">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
