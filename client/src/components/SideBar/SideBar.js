import React, { Component } from "react";
import { Link } from "react-router-dom";
import categories from "../../utils/Categories";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <ul id="slide-out" className="sidenav">
        {/* Logo */}
        <li className="brand-logo-side">
          <Link to="/" className="brand-logo sidenav-close">
            <div className="gist-logo">
              <span className="gist-logo-horizontal">get the</span>
              <span className="gist-logo-vertical" id="side-logo">
                gist
              </span>
            </div>
          </Link>
        </li>

        {/* Collapsible Gistegories for Sidebar*/}
        <ul className="collapsible collapsible-accordion">
          <li className="side-gistegories">
            <a className="collapsible-header waves-effect">
              <i className="material-icons side-icons">folder</i>
              Gist-egories
            </a>
            <div className="collapsible-body">
              <ul>
                {categories.map(category => {
                  return (
                    <li data-id={category.id} key={category.id}>
                      <Link
                        to={`/search/${category.id}`}
                        className="sidenav-close"
                      >
                        {category.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>

        {/* <li><div className="divider"></div></li> */}

        {/* Links to other pages */}
        <li>
          <Link to="/suggestions" className="sidenav-close waves-effect">
            <i className="material-icons side-icons">lightbulb_outline</i>
            Suggestions
          </Link>
        </li>
        <li>
          <Link to="/about" className="sidenav-close waves-effect">
            <i className="material-icons side-icons">info</i>
            About
          </Link>
        </li>
        <li>
          {!this.props.user ? (
            <Link
              to="/auth"
              className={`waves-effect waves-light ${this.props.show}`}
            >
              Sign In
              <i className="material-icons side-icons">account_circle</i>
            </Link>
          ) : (
            <a
              to="#"
              className={`waves-effect waves-light dropdown-trigger ${
                this.props.hide
              }`}
              data-target="dropdown3"
            >
              Signed in as: <span className="name1">{this.props.user.name}</span>
              
            </a>
          )}
        </li>
        <ul id="dropdown3" className="dropdown-content">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="#" onClick={this.props.logOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      </ul>
    );
  }
}

export default SideBar;
