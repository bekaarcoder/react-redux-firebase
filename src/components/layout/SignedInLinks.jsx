import React from 'react';
import {connect} from 'react-redux';

import {logoutUser} from '../../store/actions/authActions';
import {NavLink} from 'react-router-dom';

const SignedInLinks = (props) => {
	return (
		<ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item">
        <NavLink to="/project/create" className="nav-link">Create Project</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">My Profile</NavLink>
      </li>
      <li className="nav-item">
        <a href="#" onClick={props.logoutUser} className="nav-link">Logout</a>
      </li>
    </ul>
	);
}

export default connect(null, {logoutUser})(SignedInLinks);