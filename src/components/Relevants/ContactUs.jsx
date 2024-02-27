import React from "react";

const ContactUs = () => {
  return (
    <section className="container mt-5 mb-5 p-5 bg-success-subtle text-center">
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-lg-6 text-start">
          <form aria-labelledby="contactForm">
            <fieldset>
              <legend id="contactForm" className="visually-hidden">
                Contact form
              </legend>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  aria-required="true"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  aria-required="true"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  aria-required="true"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <h5>Contact Information</h5>
          <address>
            <ul className="list-unstyled">
              <li>
                <strong>Address:</strong> 123 Street, City, Country
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@example.com" className="link-primary">
                  info@example.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+1234567890" className="link-primary">
                  +123 456 7890
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
