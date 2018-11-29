import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';
 
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

class Dashboard extends Component {
	render() {
		const {projects, auth, notifications} = this.props;

		if(!auth.uid) {
			return (
				<Redirect to='/signin' />
			)
		}

		return (
			<div className="row">
				<div className="col-md-12 mt-4">
					<h2>Dashboard</h2>
					<div className="row mt-4">
						<div className="col-md-7">
							<ProjectList projects={projects} />
						</div>
						<div className="col-md-5">
							<Notifications notifications={notifications} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	projects: state.firestore.ordered.projects,
	auth: state.firebase.auth,
	notifications: state.firestore.ordered.notifications
});

export default compose(
	connect(mapStateToProps, {}),
	firestoreConnect([
		{
			collection: 'projects',
			orderBy: ['createdAt', 'desc']
		},
		{
			collection: 'notifications',
			limit: 5,
			orderBy: ['time', 'desc']
		}
	])
)(Dashboard);