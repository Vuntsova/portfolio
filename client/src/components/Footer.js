import React, { Fragment } from 'react';

export default function Footer() {
  return (
    <Fragment>
      <footer id="main-footer">
        <small>
          Created with Express, React & {' '}
          <i className="fa fa-heart text-secondary"></i>. Copyright 2020
        </small>
      </footer>
    </Fragment>
  );
}
