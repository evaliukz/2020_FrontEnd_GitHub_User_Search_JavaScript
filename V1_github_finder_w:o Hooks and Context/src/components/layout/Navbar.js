import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to='/about'> About </Link>
        </li>
      </ul>
    </nav>
  );
};

// default props, can be overwritten in App.js
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// this sets protocals, if pass non-string
// or not pass any title or icon, errors show

Navbar.propType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
