import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = (props) => {
	return (
		<ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Create Project</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">My Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Logout</NavLink>
      </li>
    </ul>
	);
}

export default SignedInLinks;