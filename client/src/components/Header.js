import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuBtnClicked: false,
      isMenuItemClicked: false
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
      isMenuBtnClicked: !this.state.isMenuBtnClicked
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${isMenuBtnClicked ? 'show' : ''}`}
              onClick={e => this.handleMenuItemToggle(e)}
            >
              <Link to="about" className="nav-link">
                About Me
              </Link>
            </li>
            <li
              className={`nav-item ${isMenuBtnClicked ? 'show' : ''}`}
              onClick={e => this.handleMenuItemToggle(e)}
            >
              <Link to="work.html" className="nav-link">
                My Work
              </Link>
            </li>
            <li
              className={`nav-item ${isMenuBtnClicked ? 'show' : ''}`}
              onClick={e => this.handleMenuItemToggle(e)}
            >
              <Link to="contact.html" className="nav-link">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
export default Header;
