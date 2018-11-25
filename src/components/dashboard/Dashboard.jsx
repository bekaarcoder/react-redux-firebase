import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
 
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

class Dashboard extends Component {
	render() {
		const {projects} = this.props;
		return (
			<div className="row">
				<div className="col-md-12 mt-4">
					<h2>Dashboard</h2>
					<div className="row mt-4">
						<div className="col-md-7">
							<ProjectList projects={projects} />
						</div>
						<div className="col-md-5">
							<Notifications />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	projects: state.firestore.ordered.projects
});

export default compose(
	connect(mapStateToProps, {}),
	firestoreConnect([{
		collection: 'projects'
	}])
)(Dashboard);