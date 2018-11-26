import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
	const auth = props.auth;
  return (
  	<div>
	    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	    	<div className="container">
				  <Link to="/" className="navbar-brand">Project List</Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <NavLink to="/" className="nav-link">Ideas</NavLink>
				      </li>
				    </ul>
				    {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}				    
				  </div>
				 </div>
			</nav>
		</div>
  )
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps, {})(Navbar);