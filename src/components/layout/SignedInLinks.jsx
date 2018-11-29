import React from 'react';
import {connect} from 'react-redux';

import {logoutUser} from '../../store/actions/authActions';
import {NavLink} from 'react-router-dom';

const SignedInLinks = (props) => {
  const {userId, photoURL} = props;
	return (
		<ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item">
        <NavLink to="/project/create" className="nav-link">Create Project</NavLink>
      </li>
      <li className="nav-item">
        <button onClick={props.logoutUser} className="btn btn-link nav-link">Logout</button>
      </li>
      <li className="nav-item">
        <NavLink to={`/profile/${userId}`} className="nav-link">
          {photoURL ? (
            <img
              className="rounded"
              src={photoURL}
              alt="My Profile"
              style={{width: '30px', height: '30px', marginLeft: '5px', border: '1px solid #FFF'}}
            />
          ) : (
            <span>My Profile</span>
          )
          }
        </NavLink>
      </li>
    </ul>
	);
}

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
    photoURL: state.firebase.auth.photoURL
  }
}

export default connect(mapStateToProps, {logoutUser})(SignedInLinks);