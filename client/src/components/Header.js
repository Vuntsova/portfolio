import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuBtnClicked: false,
      isMenuItemClicked: false,
      isHome: false,
      isAbout: false,
      isWork: false,
      isContact:false
    };
  }

  handleMenuBtnToggle(e) {
    e.preventDefault();
    this.setState({
      isMenuBtnClicked: !this.state.isMenuBtnClicked
    });
  }

  handleMenuItemToggle(e) {
    e.preventDefault();
    this.setState({
      isMenuItemClicked: !this.state.isMenuItemClicked,
      isMenuBtnClicked: !this.state.isMenuBtnClicked,
    });
  }

  render() {
    const { isMenuBtnClicked } = this.state;
    return (
      <Fragment>
        <div
          className={`menu-btn ${isMenuBtnClicked ? 'close' : ''}`}
          onClick={e => this.handleMenuBtnToggle(e)}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className={`menu ${isMenuBtnClicked ? 'show' : ''}`}>
          <div className={`menu-branding ${isMenuBtnClicked ? 'show' : ''}`}>
            <div className="portrait"></div>
          </div>
          <ul className={`menu-nav ${isMenuBtnClicked ? 'show' : ''}`}>
            <li
              className={`nav-item ${isMenuBtnClicked ? 'show' : ''}`}
              onClick={e => this.handleMenuItemToggle(e)}
            >
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="current"
              >
                Home
              </NavLink>
            </li>
            <li
              className={`nav-item ${isMenuBtnClicked ? 'show' : ''}`}
              onClick={e => this.handleMenuItemToggle(e)}
            >
              <NavLink
                exact
                to="/about"
                className="nav-link"
                activeClassName="current"
              >
                About Me
              </NavLink>
            </li>
            <li
              className={`nav-item ${isMenuBtnClicked ? 'show' : ''}`}
              onClick={e => this.handleMenuItemToggle(e)}
            >
              <NavLink
                exact
                to="/work"
                className="nav-link"
                activeClassName="current"
              >
                My Work
              </NavLink>
            </li>
            <li
              className={`nav-item ${isMenuBtnClicked ? 'show' : ''}`}
              onClick={e => this.handleMenuItemToggle(e)}
            >
              <NavLink
                exact
                to="/contact"
                className="nav-link"
                activeClassName="current"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
export default Header;
