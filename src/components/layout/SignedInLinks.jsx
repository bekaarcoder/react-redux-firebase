import React from 'react';
import {connect} from 'react-redux';

import {logoutUser} from '../../store/actions/authActions';
import {NavLink} from 'react-router-dom';

const SignedInLinks = (props) => {
  const userId = props.userId;
	return (
		<ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item">
        <NavLink to="/project/create" className="nav-link">Create Project</NavLink>
      </li>
      <li className="nav-item">
        <a href="#" onClick={props.logoutUser} className="nav-link">Logout</a>
      </li>
      <li className="nav-item">
        <NavLink to={`/profile/${userId}`} className="nav-link">My Profile</NavLink>
      </li>
    </ul>
	);
}

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps, {logoutUser})(SignedInLinks);