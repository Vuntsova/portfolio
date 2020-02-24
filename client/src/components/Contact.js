import React, { Fragment, Component } from 'react';
// import Social from './Social';
import Footer from './Footer';
import axios from 'axios';

class Contact extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    // const divStyle = {
    //   position: 'relative'
    // };
    return (
      <Fragment>
        <main id="contact">
          <div className="container">
            <h1 class="lg-heading">
              <span class="text-secondary">Let's</span> get in touch
            </h1>
            <div className="icons">
        <a href="https://twitter.com/emsvnt">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/emiliyavuntsova">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/emsvnt/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://github.com/Vuntsova">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/vuntsova/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
            <div className=" animated bounceInLeft">
              <div className="contact">
                <form method="POST" action="send">
                  <p>
                    <label>Name</label>
                    <input type="text" name="name" />
                  </p>
                  <p>
                    <label>Company</label>
                    <input type="text" name="company" />
                  </p>
                  <p>
                    <label>Email Address</label>
                    <input type="email" name="email" />
                  </p>
                  <p>
                    <label>Phone Number</label>
                    <input type="text" name="phone" />
                  </p>
                  <p className="full">
                    <label>Message</label>
                    <textarea name="message" rows="5"></textarea>
                  </p>
                  <p className="full">
                    <button type="submit">Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </Fragment>
    );
  }
}
export default Contact;
