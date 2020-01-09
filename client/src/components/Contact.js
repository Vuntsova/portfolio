import React, { Fragment } from 'react';
import Social from './Social';
import Footer from './Footer';

function Contact() {
  const divStyle = {
    position: 'relative'
  };
  return (
    <Fragment>
      <main id="contact">
        <h1 className="lg-heading">
          <span className="text-secondary">Let's</span> get in touch
        </h1>
        <Social></Social>
        <form id="contact-form" method="POST">
          <h2 className="text-secondary">Contact Form</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <a className="btn-dark" type="submit">
            Submit
          </a>
        </form>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}
export default Contact;
