import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = (props) => {
	return (
		<ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item">
        <NavLink to="/signin" className="nav-link">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
      </li>
    </ul>
	);
}

export default SignedOutLinks;