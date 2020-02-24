import React, { Fragment } from 'react';

function Social() {
  // const divStyle = {
  //   position: 'relative'
  // };
  return (
    <Fragment>
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
    </Fragment>
  );
}
export default Social;

