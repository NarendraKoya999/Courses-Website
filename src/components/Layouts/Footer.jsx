import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-success-subtle text-center text-lg-start"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 8px 24px rgba(0, 150, 66, 0.2)",
      }}
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Course App</h5>
            <p>
              A platform to explore and enroll in various courses to enhance
              your skills.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <div className="row">
              <div className="col-md-6">
                <h5 className="text-uppercase">Quick Links</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to="/" className="text-dark">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/course-listing" className="text-dark">
                      Courses
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about-us" className="text-dark">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/contact-us" className="text-dark">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-uppercase">Connect with Us</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="https://facebook.com" className="text-dark">
                      <i className="fab fa-facebook-f"></i>
                      &nbsp;Facebook
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://wa.me/your_number" className="text-dark">
                      <i className="fab fa-whatsapp"></i>
                      &nbsp;WhatsApp
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://linkedin.com" className="text-dark">
                      <i className="fab fa-linkedin-in"></i>
                      &nbsp;LinkedIn
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://instagram.com" className="text-dark">
                      <i className="fab fa-instagram"></i>
                      &nbsp;Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} Course App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
