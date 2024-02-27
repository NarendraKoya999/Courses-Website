import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 p-3 shadow-sm fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <i className="fa fa-laptop me-2"></i>COURSE APP
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/course-listing">
                    Course Listing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/student-dashboard">
                    Student Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Layout;
