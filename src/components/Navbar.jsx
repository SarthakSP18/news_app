import React from "react";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-3">Express News</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-link nav-item-hover" onClick={() => setCategory("technology")}>
              Tech News
            </div>
            <div className="nav-link nav-item-hover" onClick={() => setCategory("business")}>
              Business
            </div>
            <div className="nav-link nav-item-hover" onClick={() => setCategory("health")}>
              Health
            </div>
            <div className="nav-link nav-item-hover" onClick={() => setCategory("science")}>
              Science
            </div>
            <div className="nav-link nav-item-hover" onClick={() => setCategory("sports")}>
              Sports
            </div>
            <div className="nav-link nav-item-hover" onClick={() => setCategory("entertainment")}>
              Entertainment
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
