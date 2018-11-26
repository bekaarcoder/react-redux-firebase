import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {user, auth} = this.props;
		if(!auth.uid) {
			return (
				<Redirect to="/signin" />
			)
		}
		return (
			<div className="row">
				{user ? (
					<div className="col-md-12 mt-5">
						<h2 className="display-4">Welcome, {user.firstName}</h2>
					</div>
				) : ( user === undefined ? (
						<Redirect to="/" />
					) : (
						<div className="col-md-12">
							<p>Loading Profile...</p>
						</div>
					)
				)
				}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const uid = ownProps.match.params.id;
	const users = state.firestore.data.users;
	const user = users ? users[uid] : null
	return {
		user,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps, {}),
	firestoreConnect([{
		collection: 'users'
	}])
)(Profile);
